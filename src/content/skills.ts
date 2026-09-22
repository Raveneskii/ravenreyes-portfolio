export type SkillGroup = {
  label: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    label: "AI & Automation",
    items: [
      "ChatGPT & Claude for Business Tasks",
      "Gemini & opencode",
      "AI Research & Summarization",
      "AI-Assisted Email & Document Drafting",
      "Prompt Writing & Prompt Engineering",
      "Workflow Automation Concepts",
      "Content Repurposing",
      "Automated Data Entry & Cleanup",
      "n8n Automation",
      "Systems & Automation Building",
    ],
  },
  {
    label: "Administrative",
    items: [
      "Data Entry & Data Encoding",
      "Document Preparation & Reporting",
      "Email & Inbox Management",
      "Spreadsheet Management",
      "Database Maintenance & Cleanup",
      "File & Folder Organization",
      "Calendar & Appointment Scheduling",
      "Order & Transaction Processing",
      "Records Management & Accuracy Checking",
      "Administrative Support",
    ],
  },
  {
    label: "Design",
    items: [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Canva",
      "Layout & Print Production",
    ],
  },
  {
    label: "Professional",
    items: [
      "Client Relations",
      "Customer Service",
      "Operations Coordination",
      "IT Troubleshooting",
      "Problem Solving",
      "Multitasking",
    ],
  },
];
