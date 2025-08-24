import React from 'react'
import { Mail, MapPin, Phone, Linkedin, Award, Briefcase, BookOpen } from 'lucide-react'
import { resume } from '../data/resume'

const Section = ({ title, children }) => (
  <section className="mb-10">
    <h2 className="text-2xl font-bold text-primary mb-4">{title}</h2>
    <div className="glass-card p-6">{children}</div>
  </section>
)

const Resume = () => {
  return (
    <div className="min-h-screen bg-primary">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-primary">{resume.name}</h1>
          <p className="text-secondary text-lg">{resume.title}</p>
          <div className="flex flex-wrap items-center gap-4 mt-4 text-secondary">
            <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> {resume.location}</span>
            <a href={`tel:${resume.phone}`} className="flex items-center gap-2 hover:text-primary"><Phone className="w-4 h-4" /> {resume.phone}</a>
            <a href={`mailto:${resume.email}`} className="flex items-center gap-2 hover:text-primary"><Mail className="w-4 h-4" /> {resume.email}</a>
            <a href={resume.links.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-primary"><Linkedin className="w-4 h-4" /> LinkedIn</a>
          </div>
        </div>

        {/* Summary */}
        <Section title="Executive Summary">
          <p className="text-secondary leading-relaxed">{resume.summary}</p>
        </Section>

        {/* Core Competencies */}
        <Section title="Core Competencies & Areas of Expertise">
          <ul className="list-disc list-inside space-y-2 text-secondary">
            {resume.competencies.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </Section>

        {/* Skills */}
        <Section title="Skills">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(resume.skills).map(([group, items]) => (
              <div key={group}>
                <h3 className="text-primary font-semibold mb-2 capitalize">{group.replace(/([A-Z])/g, ' $1').trim()}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-[#21262d] text-secondary rounded-full text-sm">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Experience */}
        <Section title="Professional Experience">
          <div className="space-y-6">
            {resume.experiences.map((exp, idx) => (
              <div key={idx} className="border border-[#30363d] rounded-xl overflow-hidden">
                <div className="p-6 bg-[#0d1117]">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-semibold text-primary">{exp.role} • {exp.company}</h3>
                      <p className="text-secondary">{exp.project}</p>
                    </div>
                    <span className="text-secondary text-sm">{exp.period}</span>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="list-disc list-inside space-y-2 text-secondary">
                    {exp.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                  {exp.technologies?.length ? (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.technologies.map((t) => (
                        <span key={t} className="px-2 py-1 bg-[#21262d] text-secondary rounded text-xs">{t}</span>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Certifications */}
        <Section title="Certifications">
          <div className="flex flex-wrap gap-3">
            {resume.certifications.map((c) => (
              <span key={c} className="inline-flex items-center gap-2 px-3 py-2 bg-[#21262d] rounded-lg text-secondary">
                <Award className="w-4 h-4 text-[#238636]" /> {c}
              </span>
            ))}
          </div>
        </Section>

        {/* Education */}
        <Section title="Education">
          <div className="space-y-2">
            {resume.education.map((e, idx) => (
              <div key={idx} className="flex items-center gap-3 text-secondary">
                <BookOpen className="w-4 h-4 text-[#238636]" />
                <span>{e.degree} — {e.institution} ({e.period})</span>
              </div>
            ))}
          </div>
        </Section>
      </div>
    </div>
  )
}

export default Resume

