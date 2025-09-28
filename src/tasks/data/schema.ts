import { z } from "zod";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
  employeeName: z.string(),
  employeeEmail: z.string(),
  employeeAddress: z.string(),
  employeeDesignation: z.string(),
  employeeDateOfJoin: z.string(),
  employeeCtc: z.string(),
  companyLogo: z.string(),
  companyName: z.string(),
  companyAddress: z.string(),
  offerLetterDate: z.string(),
  companyContactName: z.string(),
  companyPersonTitle: z.string(),
  companyContactNumber: z.string(),
  companyPersonalEmail: z.string(),
  emailSubject: z.string(),
  emailMessage: z.string(),
  // status: offerLetterStatus;
  generateByUser: z.string(),
  createdAt: z.string(),
  _id: z.string(),
});

export type Task = z.infer<typeof taskSchema>;
