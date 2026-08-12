// export default function (){
//     return(
//        <div className="bg-black text-white">
//           <h1 className="text-center text-3xl text-yellow-500 font-semi-bold">
//             Volunteer's form
//           </h1>
          

//        </div>
//     )
// }



"use client";

import { FormEvent, useState } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  MessageSquare,
  Send,
  CheckCircle,
} from "lucide-react";

export default function VolunteerForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      location: formData.get("location"),
      occupation: formData.get("occupation"),
      areaOfInterest: formData.get("areaOfInterest"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/volunteer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Something went wrong.");
      }

      setSuccess(
        "Thank you for volunteering! Your application has been submitted successfully."
      );

      form.reset();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to submit your application. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-black px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-5 inline-flex items-center rounded-full border border-yellow-500/40 bg-yellow-500/10 px-5 py-2 text-sm font-medium text-yellow-400">
            <span className="mr-2 h-2 w-2 rounded-full bg-yellow-400" />
            VOLUNTEER WITH US
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Become a{" "}
            <span className="text-yellow-400">Volunteer</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
            Your time, skills, and passion can make a meaningful difference.
            Complete the form below to join our community of volunteers.
          </p>
        </div>

        {/* Form Card */}
        <div className="overflow-hidden rounded-3xl border border-yellow-500/30 bg-zinc-950 shadow-2xl shadow-yellow-500/5">
          {/* Gold top line */}
          <div className="h-1 w-full bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />

          <div className="p-6 sm:p-10 lg:p-14">
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Volunteer Application Form
              </h2>

              <p className="mt-2 text-sm text-gray-400">
                Please provide accurate information so we can get in touch
                with you.
              </p>
            </div>

          
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <section>
                <h3 className="mb-5 border-b border-white/10 pb-3 text-lg font-semibold text-yellow-400">
                  Personal Information
                </h3>

                <div className="grid gap-6 md:grid-cols-2">
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="fullName"
                      className="mb-2 block text-sm font-medium text-gray-200"
                    >
                      Full Name <span className="text-yellow-400">*</span>
                    </label>

                    <div className="relative">
                      <User className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-yellow-500" />

                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        required
                        placeholder="Enter your full name"
                        className="w-full rounded-xl border border-white/10 bg-white/5 py-3.5 pl-12 pr-4 text-white outline-none transition placeholder:text-gray-600 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-gray-200"
                    >
                      Email Address <span className="text-yellow-400">*</span>
                    </label>

                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-yellow-500" />

                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        className="w-full rounded-xl border border-white/10 bg-white/5 py-3.5 pl-12 pr-4 text-white outline-none transition placeholder:text-gray-600 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-medium text-gray-200"
                    >
                      Phone Number <span className="text-yellow-400">*</span>
                    </label>

                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-yellow-500" />

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="Enter your phone number"
                        className="w-full rounded-xl border border-white/10 bg-white/5 py-3.5 pl-12 pr-4 text-white outline-none transition placeholder:text-gray-600 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
                      />
                    </div>
                  </div>

                  {/* Location */}
                  <div>
                    <label
                      htmlFor="location"
                      className="mb-2 block text-sm font-medium text-gray-200"
                    >
                      Location <span className="text-yellow-400">*</span>
                    </label>

                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-yellow-500" />

                      <input
                        id="location"
                        name="location"
                        type="text"
                        required
                        placeholder="City / State"
                        className="w-full rounded-xl border border-white/10 bg-white/5 py-3.5 pl-12 pr-4 text-white outline-none transition placeholder:text-gray-600 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
                      />
                    </div>
                  </div>

                  {/* Occupation */}
                  <div className="md:col-span-2">
                    <label
                      htmlFor="occupation"
                      className="mb-2 block text-sm font-medium text-gray-200"
                    >
                      Occupation / Profession
                    </label>

                    <div className="relative">
                      <Briefcase className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-yellow-500" />

                      <input
                        id="occupation"
                        name="occupation"
                        type="text"
                        placeholder="e.g. Student, Teacher, Designer..."
                        className="w-full rounded-xl border border-white/10 bg-white/5 py-3.5 pl-12 pr-4 text-white outline-none transition placeholder:text-gray-600 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
                      />
                    </div>
                  </div>
                </div>
              </section>

              {/* Volunteer Information */}
              <section>
                <h3 className="mb-5 border-b border-white/10 pb-3 text-lg font-semibold text-yellow-400">
                  Volunteer Information
                </h3>

                <div className="space-y-6">
                  {/* Area of Interest */}
                  <div>
                    <label
                      htmlFor="areaOfInterest"
                      className="mb-2 block text-sm font-medium text-gray-200"
                    >
                      Area of Interest{" "}
                      <span className="text-yellow-400">*</span>
                    </label>

                    <select
                      id="areaOfInterest"
                      name="areaOfInterest"
                      required
                      defaultValue=""
                      className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3.5 text-white outline-none transition focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
                    >
                      <option value="" disabled>
                        Select an area
                      </option>
                      <option value="Community Development">
                        Community Development
                      </option>
                      <option value="Education">Education</option>
                      <option value="Youth Development">
                        Youth Development
                      </option>
                      {/* <option value="Event Support">Event Support</option>
                      <option value="Media & Communications">
                        Media & Communications
                      </option> */}
                      {/* <option value="Technology">Technology</option> */}
                      <option value="Fundraising">Fundraising</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-gray-200"
                    >
                      Why do you want to volunteer?
                    </label>

                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-4 h-5 w-5 text-yellow-500" />

                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        placeholder="Tell us a little about why you would like to volunteer..."
                        className="w-full resize-none rounded-xl border border-white/10 bg-white/5 py-3.5 pl-12 pr-4 text-white outline-none transition placeholder:text-gray-600 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
                      />
                    </div>
                  </div>
                </div>
              </section>
    

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="group flex w-full items-center justify-center gap-3 rounded-xl bg-yellow-400 px-6 py-4 font-bold text-black transition hover:bg-yellow-300 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? (
                    <>
                      <span className="h-5 w-5 animate-spin rounded-full border-2 border-black/30 border-t-black" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Volunteer Application
                      <Send className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </>
                  )}
                </button>

                <p className="mt-4 text-center text-xs text-gray-500">
                  By submitting this form, you agree that we may contact you
                  regarding volunteer opportunities.
                </p>
              </div>
            </form>
              {/* Success Message */}
            {success && (
              <div className="mb-8 mt-8 flex items-start gap-3 rounded-xl border border-green-500/30 bg-green-500/10 p-4 text-green-400">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0" />
                <p className="text-sm leading-6">{success}</p>
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="mb-8 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm leading-6 text-red-400">
                {error}
              </div>
            )}

          </div>
        </div>

        {/* Bottom text */}
        <p className="mt-8 text-center text-sm text-gray-500">
          Every contribution matters.{" "}
          <span className="text-yellow-400">
            Thank you for choosing to make a difference.
          </span>
        </p>
      </div>
    </main>
  );
}