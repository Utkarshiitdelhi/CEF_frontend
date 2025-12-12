import React from "react";
import SectionHeading from "../components/SectionHeading";

export default function StudyMaterialPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
      <SectionHeading
        title="Study Material"
        subtitle="Curated resources, notes, and references to help you study smarter."
      />

      {/* Study Material Resources */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="rounded-lg border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition-colors">
          <h4 className="text-white font-semibold">Semester 3 Resources Website</h4>
          <p className="text-white/70 text-sm mt-1">
            Your one-stop destination for semester resources and materials.
          </p>
          <div className="mt-3">
            <a
              href="https://rahuliitd05.github.io/Semester3/"
              target="_blank"
              className="text-cyan-300 hover:text-cyan-200 text-sm font-medium"
            >
              Open resource →
            </a>
          </div>
        </div>

        {/* <div className="rounded-lg border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition-colors">
          <h4 className="text-white font-semibold">Resource 2</h4>
          <p className="text-white/70 text-sm mt-1">
            Add a short description for this resource. Link it to PDFs, notes,
            or external sites.
          </p>
          <div className="mt-3">
            <a
              href="#"
              className="text-cyan-300 hover:text-cyan-200 text-sm font-medium"
            >
              Open resource →
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
}
