// import { NextResponse } from "next/server";

// export async function POST(request: Request) {
//   try {
//     const body = await request.json();

//     console.log("VOLUNTEER DATA:", body);

//     return NextResponse.json({
//       message: "Volunteer data received successfully!",
//       data: body,
//     });
//   } catch (error) {
//     console.error("API ERROR:", error);

//     return NextResponse.json(
//       {
//         message: "Something went wrong.",
//       },
//       {
//         status: 500,
//       }
//     );
//   }
// }




import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      fullName,
      email,
      phone,
      location,
      occupation,
      areaOfInterest,
      message,
    } = body;

    if (!fullName || !email || !phone || !location || !areaOfInterest) {
      return NextResponse.json(
        { message: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Volunteer Form <onboarding@resend.dev>",
      to: [process.env.ADMIN_EMAIL!],
      replyTo: email,
      subject: `New Volunteer Application - ${fullName}`,

      html: `
        <div style="font-family: Arial, sans-serif; background:#f4f4f4; padding:30px;">
          <div style="max-width:650px; margin:auto; background:white;">

            <div style="background:#000; padding:25px; text-align:center;">
              <h1 style="color:#D4AF37; margin:0;">
                New Volunteer Application
              </h1>
              <p style="color:white;">
                A new volunteer has submitted an application.
              </p>
            </div>

            <div style="padding:30px;">

              <h2 style="color:#000;">
                Personal Information
              </h2>

              <p><strong>Full Name:</strong> ${fullName}</p>

              <p><strong>Email:</strong> ${email}</p>

              <p><strong>Phone:</strong> ${phone}</p>

              <p><strong>Location:</strong> ${location}</p>

              <p>
                <strong>Occupation:</strong>
                ${occupation || "Not provided"}
              </p>

              <hr />

              <h2 style="color:#000;">
                Volunteer Information
              </h2>

              <p>
                <strong>Area of Interest:</strong>
                ${areaOfInterest}
              </p>

              <p>
                <strong>Why they want to volunteer:</strong>
              </p>

              <div style="background:#f5f5f5; padding:15px; border-left:4px solid #D4AF37;">
                ${message || "No message provided."}
              </div>

            </div>

            <div style="background:#000; padding:15px; text-align:center;">
              <p style="color:#D4AF37;">
                Volunteer Management System
              </p>
            </div>

          </div>
        </div>
      `,
    });

    if (error) {
      console.error("RESEND ERROR:", error);

      return NextResponse.json(
        {
          message: "Email could not be sent.",
          error: error.message,
        },
        { status: 500 }
      );
    }

    console.log("EMAIL SENT:", data);

    return NextResponse.json(
      {
        message: "Volunteer application submitted successfully.",
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("SERVER ERROR:", error);

    return NextResponse.json(
      {
        message: "Something went wrong while submitting the application.",
      },
      { status: 500 }
    );
  }
}