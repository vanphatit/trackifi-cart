# Trackifi Cart UI

Reusable shopping cart UI library with full CRUD, GearVN-inspired red styling, and zero external dependencies. Ships standardized building blocks (inputs, buttons, modals, cards) plus a ready-made `CartUI` class you can mount into any project.

## Features
- Add, edit, delete items with inline modal flow and total summary.
- Standardized UI pieces exported: `createInput`, `createButton`, `createCard`, `createModal`.
- Red-first styling inspired by gearvn.com, no design system dependencies.
- Vanilla ESM, works in any modern bundler or `<script type="module">`.

## Quick start
1) Install after publishing:  
`npm install trackifi-cart`

2) Mount the cart somewhere in your app:
```js
import { mountCart } from "trackifi-cart";
import "trackifi-cart/src/styles.css"; // adjust path if you copy assets elsewhere

const cart = mountCart("#cart-root", {
  currencySymbol: "$",
  initialItems: [
    { name: "HyperX Alloy Origins", price: 120, quantity: 1 },
    { name: "Logitech G Pro X Superlight", price: 159, quantity: 2 }
  ],
  onItemsChange: (items) => console.log("Updated cart", items)
});
```

3) Add the container to your markup:
```html
<div id="cart-root"></div>
```

### Vanilla HTML demo snippet
```html
<link rel="stylesheet" href="node_modules/trackifi-cart/src/styles.css" />
<div id="cart"></div>
<script type="module">
  import { mountCart } from "./node_modules/trackifi-cart/src/index.js";
  mountCart("#cart", { currencySymbol: "₫" });
  // CRUD actions are built-in; listen with onItemsChange if you need syncing.
</script>
```

## API surface
- `new CartUI({ container, currencySymbol?, initialItems?, onItemsChange? })`
  - `container`: HTMLElement or selector.
  - `currencySymbol`: string, defaults to `$`.
  - `initialItems`: `{ name, price, quantity }[]`.
  - `onItemsChange`: callback receiving the updated items array.
- `mountCart(selectorOrElement, options)` convenience wrapper around `CartUI`.
- UI atoms: `createButton`, `createInput`, `createCard`, `createModal`.

## File structure
- `src/index.js` – library entry, exports `CartUI`, `mountCart`, and UI atoms.
- `src/styles.css` – red GearVN-inspired theme with cards, modals, buttons, inputs.
- `package.json` – ESM entry points; `files` whitelist set for npm packaging.

## Packaging & publishing to npm
1) Update metadata in `package.json` (name, author, version).
2) Optional: validate syntax.  
   `npm run check`
3) Test the tarball locally.  
   `npm pack`
   - This produces `trackifi-cart-<version>.tgz`. Install it elsewhere with `npm install ../trackifi-cart-<version>.tgz` to verify.
4) Log in and publish:
   ```bash
   npm login
   npm version patch   # or minor/major
   npm publish --access public
   ```
5) Consumers then install with `npm install <your-package-name>` and import `src/index.js` and `src/styles.css` (or bundle them into their own build).

### Bundling notes
The code is modern ESM with no dependencies. If you want a compiled distribution, add a bundler like `tsup` or `rollup` and point `package.json` `main/module/style` to the built files, but the current setup ships as-is for simplicity.

## Customization tips
- Override colors by redefining the CSS variables in your host app (e.g., `--red-600`, `--card`, `--text`).
- Use the `onItemsChange` hook to sync totals to your backend or app state.
- Swap `currencySymbol` to match your locale without touching logic.






You are a data augmentation specialist for job matching systems. Your task is to generate 3 augmented versions of a Job Description (JD) and Resume pair that maintain their "Good Fit" relationship while introducing realistic variations.

**ORIGINAL JD:**
The position is described below. If you want to apply, click the Apply Now button at the top or bottom of this page. After you click Apply Now and complete your application, you'll be invited to create a profile, which will let you see your application status and any communications. If you already have a profile with us, you can log in to check status.Need Help?If you have a disability and need assistance with the application, you can request a reasonable accommodation. Send an email to Accessibility (accommodation requests only; other inquiries won't receive a response).Regular or Temporary:RegularLanguage Fluency: English (Required)Work Shift:1st shift (United States of America)Please review the following job description:Join a dynamic team delivering technically complex financial solutions within the Insurance space. Design and deliver custom applications with internal business partners and product owners. Drive productivity and efficiency via system integrations and automation.ESSENTIAL DUTIES AND RESPONSIBILITIESFollowing is a summary of the essential functions for this job. Other duties may be performed, both major and minor, which are not mentioned below. Specific activities may change from time to time. 1. Work as a technical expert with clients, analysts, programmers and other team members to develop technical solutions to complex business problems.2. Develop customized coding, software integration, perform analysis, configure solutions, using tools specific to the project or the area.2. Lead and participate in the development, testing, implementation, maintenance, and support of highly complex solutions in adherence to company standards, including robust unit testing and support for subsequent release testing.3. Build non-functional monitoring capabilities and provide escalated support for highly complex applications in production.4. Build in and maintain security controls and monitoring in support of company standards.5. Typically lead moderately complex projects and participate in larger, more complex initiatives.6. Solve complex technical and operational problems. Act as a resource for teammates with less experience7. May oversee the work of a small team.8. In an Agile environment:Responsible for delivering high quality working software and automating manualreusable tasks working directly, and engage with, the business from the beginning of the design work.Leverage continuous engineering practices to deliver business value regarding effectiveness of the design.Actively participate in refining user stories.Responsible for design, developing, and maintaining automated unit testing, and supporting integration and functional testing.Responsible for providing automated monitoring capabilities, providing warranty support, and providing knowledge transfer to production support.
Develop code in accordance with the acceptance criteria established by the Product Owner

QUALIFICATIONSRequired QualificationsThe requirements listed below are representative of the knowledge, skill andor ability required. Reasonable accommodations may be made to enable individuals with disabilities to perform the essential functions.1. Bachelors Degree and six to ten years of experience or equivalent education and software engineering training or experience2. In-depth knowledge in information systems and ability to identify, apply, and implement best practices3. Understanding of key business processes and competitive strategies related to the IT function4. Ability to plan and manage projects and solve complex problems by applying best practices5. Ability to provide direction and mentor less experienced teammates. Ability to interpret and convey complex, difficult, or sensitive informationPreferred Qualifications1. Masters degree and ten+ years of experience or an equivalent combination of education and work experience2. Professional experience building high-quality apps or services from the ground up and scaling at an enterprise level3. Insurance, Fintech, Financial Accounting, Treasury experience.4. Strong experience in one or more of the following areas (full-stack development on front-end, back-end and Cloud is a plus)5. .NET developer, proficient in C#.6. UI Development using Angular (version 8 or above), HTML5, CSS3, Bootstrap, JavaScript, AJAX, JSON7. Backend Development (Implementing REST  SOAP services  Micro Service APIs) using Java (8911), Spring, Spring Boot Framework, Hibernate and RESTful web services8. Hosting application components on Cloud using Amazon Web Services (AWS)  Azure.9. Solid foundation in data structures, algorithms, and software design with strong analytical and debugging skills10. Multiple years working in an Agile team, SAFe preferred.11. Strong understanding of SOA andor Open API methodologies and service architectures12. Experience using web servers, application containers, caching technologies13. Solid knowledge of relational database design and development (SQL, stored procedures, data modeling)14. Proficient in Azure DevOps, Visual Studio and Git. Proven ability to write comprehensive unit and integration tests

OTHER JOB REQUIREMENTS  WORKING CONDITIONS
SittingConstantly (More than 50% of the time)StandingFrequently (25% - 50% of the time)WalkingFrequently (25% - 50% of the time) Visual  Audio  SpeakingAble to access and interpret client information received from the computer and able to hear and speak with individuals in person and on the phone.Manual Dexterity  Keyboarding Able to work standard office equipment, including PC keyboard and mouse, copyfax machines, and printers.AvailabilityAble to work all hours scheduled, including overtime as directed by managersupervisor and required by business need.Travel Minimal and up to 10%General Description of Available Benefits for Eligible Employees of Truist Financial Corporation: All regular teammates (not temporary or contingent workers) working 20 hours or more per week are eligible for benefits, though eligibility for specific benefits may be determined by the division of Truist offering the position. Truist offers medical, dental, vision, life insurance, disability, accidental death and dismemberment, tax-preferred savings accounts, and a 401k plan to teammates. Teammates also receive no less than 10 days of vacation (prorated based on date of hire and by full-time or part-time status) during their first year of employment, along with 10 sick days (also prorated), and paid holidays. For more details on Truists generous benefit plans, please visit our Benefits site. Depending on the position and division, this job may also be eligible for Truists defined benefit pension plan, restricted stock units, andor a deferred compensation plan. As you advance through the hiring process, you will also learn more about the specific benefits available for any non-temporary position for which you apply, based on full-time or part-time status, position, and division of work.Truist supports a diverse workforce and is an Equal Opportunity Employer that does not discriminate against individuals on the basis of race, gender, color, religion, citizenship or national origin, age, sexual orientation, gender identity, disability, veteran status or other classification protected by law. Truist is a Drug Free Workplace.EEO is the Law Pay Transparency Nondiscrimination Provision E-Verify

**ORIGINAL RESUME:**
SummarySenior Software Engineer with 6+ years in analysis, design, development, testing and implementation of various Internet-based applications. Experienced with all stages of the development cycle for dynamic web projects. Solutions are based on the Microsoft stack including SQL Server, C#, ASP.NET MVC, Visual Studio, HTML5, CSS3 etc. while leveraging the open source technologies such as jQuery, Bootstrap, Less, and others. Strong background in management and leadership. Proved leader with excellent interpersonal and motivational abilities to develop collaborative relationships among high-functioning teams. Exceptional problem solver with an aptitude for troubleshooting and the ability to quickly master new skill, technology, or role.
Highlights6+ years in software development industryStrong multi-tier experience from back-end data source through mid-level services to front-end user interfacesFull software development life cycle experience and team management experienceHave a solid grasp and experience with MVC and OO designGood Knowledge of WCF, XML, REST & Web API, and SOA Frameworks desiredAdvanced knowledge of jQuery, JavaScript & AJAX, HTML5, CSS & BootstrapExpertise with database management and developmentExperience in using a variety of IT management tools such as TFS, Git and SVN.
ExperienceSenior Software Engineer,06/2015-CurrentIntuitâ€“Waterbury,CT,DPES Team provide the services, monitors and tools for Data Platform. The tools include LRSS for schedule the automated testing and job runs, WTT for run test and jobs, Test Dashboard for view the results of test and jobs. Lots of monitors for WTT job runs, auto create incident and sent alert email to the related engineer. The database and service are host in Azure to provide scalability and reliability service.Achievements:Add new monitor for job runs, services and databases, auto send email and open new tickets for involve engineer to investigate.Involved in writing application level code to interact with Web Services using Ajax, JSON and XML. As DevOps model include coding, testing and deploy the features to Azure Cloud System.Improve and add new features for the internal portal to view the status of  services, schedulers and monitors using ASP.NET MVC, Kendo Grid and BootstrapAnalysis the WTT Lab Runs Problem State, query the data from Azure Database by SSMS 2014 to find the root case and send email to owner for take a look by using Test Dashboard, Power PI and WTTWorked in scrum process attending daily stand up and completing tasks in sprintsLanguage/Tools:ASP.NET MVC, WCF, jQuery, Kendo-Grid, HTML5, Bootstrap, VS & TFS 2013, Azure, LRSS, WTT, Code Flow, Test Dashboard, Power BI, SSMS 2014Senior Software Engineer & Team Leader,04/2011-05/2015Intuitâ€“West Helena,AR,Payment Collection Service Team is building an online cloud platform which can meet the scale, reliability and availability demands of somewhere between 500M-1B transactions while maintaining the security required for this type of data. These services have a huge global footprint of over 240 markets and process nearly 150M transactions daily, with loads growing linearly as Microsoft moves to a fully cloud-powered services and devices company.Achievements:Lead a team of 5 full-time engineer, participate in the roadmap definition for the team, establish engineering best practices and be a mentor to other members of the team.Design and implementation of new features including a dynamic CSS for partners to post data applicable to new styles and usable within Win10.Execute most of partner on-boarding through nearly 30 different processes as well as UI customizing and updating styles.Integrate Bitcoin pay which customer can exchange Bitcoins to buy Apps, games and more for windows, windows phone and Xbox.Develop cross browser, cross devices high-quality, high-performance, beautiful, maintainable front-end code using ASP.NET MVC, JavaScript, HTML5, CSS3, jQueryFind and help fix stability, scalability, performance issues, cross-browser compatibility, web standards and interoperability.Language/Tools:C#, ASP.NET MVC, jQuery, jQuery Validation, AJAX, HTML5, CSS, VS 2012, TFS 2012, Bugger, Code Flow, Source Depot, FiddlerSenior Software Engineer,08/2010-04/2011Amazon.Com, Inc.â€“Albuquerque,NM,Security Watch Dog is building a service oriented architectures system to provide Web Service for check Windows server service status, include File System Check, Certificate Check, Windows Task Check, Windows Service Check, Membership Check and Domain Security Check. I conducted system security and certificate checks, demonstrating ability to be extremely thorough and accurate to ensure safety and compliance. Wrote Unite test for both checks as well.Achievements:Work with defect tracking, source code control and software release systems to ensure high-quality software releases over timeImplemented the features of File system security check: include the folder permissions, owner list and access security check and so on. Check whether the folder path exist on the host and check whether the permission value contain invalid characters; Check each of the actual folder permission.Certificate check: get the store list of certificate by registry, then fetch each cert by thumb print, check the expired date, check whether the certificate is used by IIS.Write the Unite test for File system and certificate check, improve the code quality and system performanceSystem support and maintenance, debug and fix bugs, solve the issuesLanguage/Tools:C#, Web Service, XML, WMI, VS & TFS 2008, Active Directory, SQL Server 2005Software Developer Engineer II,02/2009-2010WICRESOFT SHANGHAI CO. LTDâ€“City,STATE,Our team was built a modern, web base call center CRM (Customer Relationship Management) which help call center agents access the right information and knowledge about a customer's history to improve the overall customer experience. This system using 3-tier: data access layer, business logic layer and web UI layer by using ASP.NET MVC, Entity Framework, SQL Server.Participant the design with Project Manager, Team Leader and other team member. Prepare the user document, include API design and database design, and use 3-tier architecture for this project.Writing high quality code, participate in code reviews, design systems of varying complexity and scopeImplemented various features such as task management module, customer service processing, creation and assignment of tasks, and abilities to add notes.Add permissions for task manager to improve both security and service.Implemented unit and integration tests to consistently deliver high quality features, and utilized SSRS to create daily and monthly analysis reports.Worked in scrum process attending daily stand up and completing tasks in sprintsLanguage/Tools:C#, ASP.NET MVC, Ajax, Entity Framework, LINQ, SQL Server 2005, SSRS
EducationMaster of Science:Software Engineer,Expected in2009-University of Science & Technology-Hefei,AnhuiGPA:Status-Bachelor of Science:Biology,Expected in2005-Hunan University of Science & Technology-Xiangtan,HunanGPA:Status-
Skillsâ€¢Programming Languages & Technologies:C# .NET, ASP.NET MVC, ADO.NET,WCF, JavaScript & jQuery, CSS3 & Bootstrap, HTML5, JSON,  UML, XMLâ€¢Database:T-SQL, SQL Server,LINQ,Microsoft Entity Framework, SQL Reporting Servicesâ€¢Tools:VS & TFS, MS SQL Server, Source Depot, IIS6/7, Code Flow, Bugger, WTT, Test Dashboard, Power BI, Git

**REQUIREMENTS:**
Generate exactly 3 augmented versions. For each version, modify BOTH the JD and Resume to maintain their matching relationship. The key matching factors are:
- 15-20+ years of software/engineering experience
- Experience with C programming and systems-level work
- Leadership/management experience (supervising teams, technical personnel)
- Systems engineering and infrastructure experience
- Problem-solving and technical leadership abilities

Apply different augmentation techniques to each version:

**VERSION 1 - Paraphrasing & Synonym Replacement:**
- Rephrase sentences while keeping the same meaning
- Replace technical terms with synonyms (e.g., "supervising" → "overseeing", "facilitate" → "enable")
- Maintain the core qualifications that make them match (20 years experience, C programming, leadership, systems work)
- Keep the same overall structure and sections

**VERSION 2 - Entity Substitution & Detail Variation:**
- Replace company names in JD: Fiserv → similar fintech/payment companies (e.g., PayPal, Square, Stripe)
- Replace company names in RESUME: Cisco/Scientific Atlanta → DIFFERENT tech companies (e.g., Intel, IBM, AMD, Oracle, HP) - DO NOT use the same company as the JD
- Replace universities: Duke/UNC → comparable institutions (e.g., MIT, Stanford, Berkeley, Georgia Tech, Carnegie Mellon, Cornell, Caltech)
- **CRITICAL: KEEP ORIGINAL DEGREE FIELDS EXACTLY** - If original has "Physics" degrees, augmented version must have "Physics" degrees at different universities. If original has "Computer Science", keep "Computer Science". DO NOT change academic disciplines.
- Swap technologies with equivalents: Java → C++, AIX → Solaris/HP-UX, AWS → Azure/GCP, Python → Ruby/Perl variations
- Modify years slightly: "15+ years" → "16+ years" or "15-18 years"; "20 years" → "21-22 years"
- Adjust locations and dates while maintaining timeline logic
- Do NOT invent new specific metrics (like "40% improvement") unless present in original

**VERSION 3 - Format & Structure Variation:**
- Reorganize resume sections (move Skills before Experience, or Education to different position)
- Convert bullet points to paragraph format or vice versa
- Vary skill expressions: "C programming" → "Proficient in C", "20 years experience" → "Two decades of expertise"
- Change JD structure: reorder requirements, combine/split sections
- Adjust detail levels: expand some accomplishments, compress others
- Use different date formats (01/1999 → January 1999, or 1999-Present)

**CRITICAL CONSTRAINTS:**
1. The augmented JD and Resume MUST remain a "Good Fit" - preserve the core matching elements:
   - 15-20+ years technical experience
   - C programming expertise
   - Leadership/management of technical teams
   - Systems engineering background
   - Infrastructure and platform experience
2. **EDUCATION MUST PRESERVE ORIGINAL DEGREE FIELDS:** If the original resume has Physics degrees, keep Physics degrees (only change universities). If it has Computer Science degrees, keep Computer Science degrees. DO NOT change the academic discipline to "improve the match" - many candidates transition between fields.
3. In Version 2, when changing company names in the resume, use a DIFFERENT company than the one in the JD (e.g., if JD is for PayPal, resume should show Intel or IBM, not PayPal)
4. Keep changes realistic and professional - do not invent specific metrics or percentages not in the original
5. Do not introduce contradictions or skill mismatches
6. Maintain readability and proper formatting
7. Ensure experience timelines make logical sense

**OUTPUT FORMAT:**
Return your response as valid JSON only (no markdown, no code blocks, no preamble):

{
  "version_1": {
    "job_description": "full augmented JD text here",
    "resume": "full augmented resume text here",
    "augmentation_type": "Paraphrasing & Synonym Replacement"
  },
  "version_2": {
    "job_description": "full augmented JD text here",
    "resume": "full augmented resume text here",
    "augmentation_type": "Entity Substitution & Detail Variation"
  },
  "version_3": {
    "job_description": "full augmented JD text here",
    "resume": "full augmented resume text here",
    "augmentation_type": "Format & Structure Variation"
  }
}

Generate the 3 versions now. Return only the JSON output.