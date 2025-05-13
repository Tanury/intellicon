// App.jsx

import {
  ocpResponsibilities, ocpSkills, ocpKPIs, ocpLearningOutcomes,
  ocvpDelegatesResponsibilities, ocvpDelegatesSkills, ocvpDelegatesKPIs, ocvpDelegatesLearningOutcomes,
  ocvpMarketingResponsibilities, ocvpMarketingSkills, ocvpMarketingKPIs, ocvpMarketingLearningOutcomes,
  ocvpPartnershipResponsibilities, ocvpPartnershipSkills, ocvpPartnershipKPIs, ocvpPartnershipLearningOutcomes,
  ocvpFinanceResponsibilities, ocvpFinanceSkills, ocvpFinanceKPIs, ocvpFinanceLearningOutcomes,
  ocvpLogisticsResponsibilities, ocvpLogisticsSkills, ocvpLogisticsKPIs, ocvpLogisticsLearningOutcomes,
  ocvpPublicRelationsResponsibilities, ocvpPublicRelationsSkills, ocvpPublicRelationsKPIs, 
  ocvpWebDevResponsibilities, ocvpWebDevSkills, ocvpWebDevKPIs, 
} from './Data';  // Adjust the path based on your file structure


function App() {
  const teamStructure = [
    "OCP x1",
    "OCVP Delegates x3",
    "OCVP Marketing x2",
    "OCVP Partnership Development x3",
    "OCVP Finance x1",
    "OCVP Logistics x2",
    "OCVP Public Relations x1",
    "OCVP Web Development x1"

  ];



  return (
    <div className="bg-black text-white p-6">
       <img 
            src="/header-image.png" 
            alt="IntelliCon 2025 Banner" 
            className="w-full h-auto"
          />
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-2xl mb-4  text-blue-500 font-bold ">AIESEC in SLIIT</h1>
          <div className="bg-blue-300 text-black p-4 rounded-lg mb-4">
            <h2 className="text-2xl font-bold ">IntelliCon '25</h2>
          </div>
          
          <p className="text-gray-300">Application Package</p>
        </header>

        {/* Event Introduction */}
        <section className="mb-8 ">
          <h2 className="text-xl font-bold mb-4">Event Introduction</h2>
          <p className="text-gray-300">
            <span className="bg-blue-300 text-black px-2 py-1 rounded mr-2">IntelliCon '25</span>
            is the ultimate Artificial Intelligence experience, where innovation meets impact. Designed to ignite curiosity and inspire action, we bring together future leaders to explore the frontiers of AI, its real world applications, and its role in shaping tomorrow.

          </p>
        </section>

        {/* Timeline */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">Timeline</h2>
          <div className="text-gray-300">
            <p>Application Open - 13th May 2025</p>
            <p>OCP Application Deadline - 18th May 2025</p>
            <p>OCVP Application Deadline - 20th May 2025</p>
            <p>OC Announcement - 2nd June 2025</p>
          </div>
        </section>

        {/* Team Structure */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">Team Structure</h2>
          <div className="text-gray-300">
            {teamStructure.map((role, index) => (
              <p key={index}>{role}</p>
            ))}
          </div>
        </section>

        {/* Available Roles */}
        <section className="space-y-6">
          <h2 className="text-xl font-bold mb-4">Available Roles</h2>

          {/* OCP Role */}
          <div className="border border-red-500 rounded-lg p-6">
            <h3 className="text-xl font-bold text-red-500 mb-4">OCP x1</h3>

            <div className="mb-6">
              <h4 className="font-bold mb-2">Job Description</h4>
              <ul className="list-disc pl-6 space-y-2">
                {ocpResponsibilities.map((resp, index) => (
                  <li key={index} className="text-gray-300">{resp}</li>
                ))}
              </ul>
            </div>

            <div className="mb-6 mt-6">
              <h4 className="font-bold mb-2">Experience</h4>
              <ul className="list-disc pl-6 space-y-2">
                {ocpSkills.map((skill, index) => (
                  <li key={index} className="text-gray-300">{skill}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-2">KPI / MoS</h4>
              <ul className="list-disc pl-6 space-y-2">
                {ocpKPIs.map((kpi, index) => (
                  <li key={index} className="text-gray-300">{kpi}</li>
                ))}
              </ul>
            </div>

            {/* <div>
              <h4 className="font-bold mb-2 mt-4">Learning Outcomes</h4>
              <ul className="list-disc pl-6 space-y-2">
                {ocpLearningOutcomes.map((out, index) => (
                  <li key={index} className="text-gray-300">{out}</li>
                ))}
              </ul>
            </div> */}
          </div>

          {/* OCVP Delegates Role */}
          <div className="border border-blue-500 rounded-lg p-6">
            <h3 className="text-xl font-bold text-blue-500 mb-4">OCVP Delegates x3</h3>

            <div>
              <h4 className="font-bold mb-2">Job Description</h4>
              <ul className="list-disc pl-6 space-y-2">
                {ocvpDelegatesResponsibilities.map((resp, index) => (
                  <li key={index} className="text-gray-300">{resp}</li>
                ))}
              </ul>
            </div>

            <div className="mb-6 mt-6">
              <h4 className="font-bold mb-2">Experience</h4>
              <ul className="list-disc pl-6 space-y-2">
                {ocvpDelegatesSkills.map((skill, index) => (
                  <li key={index} className="text-gray-300">{skill}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-2">KPI / MoS</h4>
              <ul className="list-disc pl-6 space-y-2">
                {ocvpDelegatesKPIs.map((kpi, index) => (
                  <li key={index} className="text-gray-300">{kpi}</li>
                ))}
              </ul>
            </div>

            {/* <div>
              <h4 className="font-bold mb-2 mt-4">Learning Outcomes</h4>
              <ul className="list-disc pl-6 space-y-2">
                {ocvpDelegatesLearningOutcomes.map((out, index) => (
                  <li key={index} className="text-gray-300">{out}</li>
                ))}
              </ul>
            </div> */}

          </div>

          {/* OCVP Marketing Role */}
          <div className="border border-red-500 rounded-lg p-6">
            <h3 className="text-xl font-bold text-red-500 mb-4">OCVP Marketing x2</h3>

            <div>
              <h4 className="font-bold mb-2">Job Description</h4>
              <ul className="list-disc pl-6 space-y-2">
                {ocvpMarketingResponsibilities.map((resp, index) => (
                  <li key={index} className="text-gray-300">{resp}</li>
                ))}
              </ul>
            </div>

            <div className="mb-6 mt-6">
              <h4 className="font-bold mb-2">Experience</h4>
              <ul className="list-disc pl-6 space-y-2">
                {ocvpMarketingSkills.map((skill, index) => (
                  <li key={index} className="text-gray-300">{skill}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-2">KPI / MoS</h4>
              <ul className="list-disc pl-6 space-y-2">
                {ocvpMarketingKPIs.map((kpi, index) => (
                  <li key={index} className="text-gray-300">{kpi}</li>
                ))}
              </ul>
            </div>

            {/* <div>
              <h4 className="font-bold mb-2 mt-4">Learning Outcomes</h4>
              <ul className="list-disc pl-6 space-y-2">
                {ocvpMarketingLearningOutcomes.map((out, index) => (
                  <li key={index} className="text-gray-300">{out}</li>
                ))}
              </ul>
            </div> */}

          </div>

          {/* OCVP Partnership Role */}
          <div className="border border-yellow-500 rounded-lg p-6">
            <h3 className="text-xl font-bold text-yellow-500 mb-4">OCVP Partnership Development x3</h3>

            <div>
              <h4 className="font-bold mb-2">Job Description</h4>
              <ul className="list-disc pl-6 space-y-2">
                {ocvpPartnershipResponsibilities.map((resp, index) => (
                  <li key={index} className="text-gray-300">{resp}</li>
                ))}
              </ul>
            </div>

            <div className="mb-6 mt-6">
              <h4 className="font-bold mb-2">Experience</h4>
              <ul className="list-disc pl-6 space-y-2">
                {ocvpPartnershipSkills.map((skill, index) => (
                  <li key={index} className="text-gray-300">{skill}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-2">KPI / MoS</h4>
              <ul className="list-disc pl-6 space-y-2">
                {ocvpPartnershipKPIs.map((kpi, index) => (
                  <li key={index} className="text-gray-300">{kpi}</li>
                ))}
              </ul>
            </div>

            {/* <div>
              <h4 className="font-bold mb-2 mt-4">Learning Outcomes</h4>
              <ul className="list-disc pl-6 space-y-2">
                {ocvpPartnershipLearningOutcomes.map((out, index) => (
                  <li key={index} className="text-gray-300">{out}</li>
                ))}
              </ul>
            </div> */}

          </div>

          {/* OCVP Finance Role */}
          <div className="border border-green-500 rounded-lg p-6">
            <h3 className="text-xl font-bold text-green-500 mb-4">OCVP Finance x1</h3>

            <div>
              <h4 className="font-bold mb-2">Job Description</h4>
              <ul className="list-disc pl-6 space-y-2">
                {ocvpFinanceResponsibilities.map((resp, index) => (
                  <li key={index} className="text-gray-300">{resp}</li>
                ))}
              </ul>
            </div>

            <div className="mb-6 mt-6">
              <h4 className="font-bold mb-2">Experience</h4>
              <ul className="list-disc pl-6 space-y-2">
                {ocvpFinanceSkills.map((skill, index) => (
                  <li key={index} className="text-gray-300">{skill}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-2">KPI / MoS</h4>
              <ul className="list-disc pl-6 space-y-2">
                {ocvpFinanceKPIs.map((kpi, index) => (
                  <li key={index} className="text-gray-300">{kpi}</li>
                ))}
              </ul>
            </div>

            {/* <div>
              <h4 className="font-bold mb-2 mt-4">Learning Outcomes</h4>
              <ul className="list-disc pl-6 space-y-2">
                {ocvpFinanceLearningOutcomes.map((out, index) => (
                  <li key={index} className="text-gray-300">{out}</li>
                ))}
              </ul>
            </div> */}

          </div>

          {/* OCVP Logistics Role */}
          <div className="border border-pink-500 rounded-lg p-6">
            <h3 className="text-xl font-bold text-pink-500 mb-4">OCVP Logistics x2</h3>

            <div>
              <h4 className="font-bold mb-2">Job Description</h4>
              <ul className="list-disc pl-6 space-y-2">
                {ocvpLogisticsResponsibilities.map((resp, index) => (
                  <li key={index} className="text-gray-300">{resp}</li>
                ))}
              </ul>
            </div>

            <div className="mb-6 mt-6">
              <h4 className="font-bold mb-2">Experience</h4>
              <ul className="list-disc pl-6 space-y-2">
                {ocvpLogisticsSkills.map((skill, index) => (
                  <li key={index} className="text-gray-300">{skill}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-2">KPI / MoS</h4>
              <ul className="list-disc pl-6 space-y-2">
                {ocvpLogisticsKPIs.map((kpi, index) => (
                  <li key={index} className="text-gray-300">{kpi}</li>
                ))}
              </ul>
            </div>

            {/* <div>
              <h4 className="font-bold mb-2 mt-4">Learning Outcomes</h4>
              <ul className="list-disc pl-6 space-y-2">
                {ocvpLogisticsLearningOutcomes.map((out, index) => (
                  <li key={index} className="text-gray-300">{out}</li>
                ))}
              </ul>
            </div> */}

          </div>

          {/* OCVP PR Role */}
          <div className="border border-purple-500 rounded-lg p-6">
            <h3 className="text-xl font-bold text-purple-500 mb-4">OCVP Public Relations x1</h3>

            <div>
              <h4 className="font-bold mb-2">Job Description</h4>
              <ul className="list-disc pl-6 space-y-2">
                {ocvpPublicRelationsResponsibilities.map((resp, index) => (
                  <li key={index} className="text-gray-300">{resp}</li>
                ))}
              </ul>
            </div>

            <div className="mb-6 mt-6">
              <h4 className="font-bold mb-2">Experience</h4>
              <ul className="list-disc pl-6 space-y-2">
                {ocvpPublicRelationsSkills.map((skill, index) => (
                  <li key={index} className="text-gray-300">{skill}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-2">KPI / MoS</h4>
              <ul className="list-disc pl-6 space-y-2">
                { ocvpPublicRelationsKPIs.map((kpi, index) => (
                  <li key={index} className="text-gray-300">{kpi}</li>
                ))}
              </ul>
            </div>

            {/* <div>
              <h4 className="font-bold mb-2 mt-4">Learning Outcomes</h4>
              <ul className="list-disc pl-6 space-y-2">
                {ocvpLogisticsLearningOutcomes.map((out, index) => (
                  <li key={index} className="text-gray-300">{out}</li>
                ))}
              </ul>
            </div> */}

          </div>

          {/* OCVP Events Role */}
          <div className="border border-cyan-500 rounded-lg p-6">
            <h3 className="text-xl font-bold text-cyan-500 mb-4">OCVP Web Development x1</h3>

            <div>
              <h4 className="font-bold mb-2">Job Description</h4>
              <ul className="list-disc pl-6 space-y-2">
                {ocvpWebDevResponsibilities.map((resp, index) => (
                  <li key={index} className="text-gray-300">{resp}</li>
                ))}
              </ul>
            </div>

            <div className="mb-6 mt-6">
              <h4 className="font-bold mb-2">Experience</h4>
              <ul className="list-disc pl-6 space-y-2">
                {ocvpWebDevSkills.map((skill, index) => (
                  <li key={index} className="text-gray-300">{skill}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-2">KPI / MoS</h4>
              <ul className="list-disc pl-6 space-y-2">
                { ocvpWebDevKPIs.map((kpi, index) => (
                  <li key={index} className="text-gray-300">{kpi}</li>
                ))}
              </ul>
            </div>

            {/* <div>
              <h4 className="font-bold mb-2 mt-4">Learning Outcomes</h4>
              <ul className="list-disc pl-6 space-y-2">
                {ocvpLogisticsLearningOutcomes.map((out, index) => (
                  <li key={index} className="text-gray-300">{out}</li>
                ))}
              </ul>
            </div> */}

          </div>

          
        </section>

        <div className='mt-10 mb-14'>
          <a href="https://forms.gle/u9pwmSCjjtZMPCCr9">
          <button className='w-full bg-blue-300 p-2 rounded-2xl hover:bg-blue-400 hover:cursor-pointer text-lg '>
            Apply Now!
          </button>
          </a>
        </div>
      </div>
         <footer className="mt-8">
        <img src="/footer.png" alt="IntelliCon '25 Footer" className="w-full h-auto" />
        </footer>
           


    </div>
  )
}

export default App