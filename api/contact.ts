import { type Handlers } from "$fresh/server.ts";
import { STATUS_CODE } from "$std/http/status.ts";

export class BadRequestError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = "BadRequestError";
  }
}

const db = await Deno.openKv();

export interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  phone: string;
  message: string;
  workType: string;
  budget: number;
  createdAt: Date;
  updatedAt: Date;
}

export const handler: Handlers<undefined> = {
  async POST(req) {
    const id = crypto.randomUUID();
    const tzoffset = (new Date()).getTimezoneOffset() * 60000;
    const now = (new Date(Date.now() - tzoffset)).toISOString().slice(0, 19).replace('T', ' ');
    const data = await req.formData();

    if (data === null) {
      throw new BadRequestError("Data is missing.")
    }

    const contact = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      company: data.company,
      phone: data.phone,
      message: data.message,
      workType: data.workType,
      budget: data.budget,
      createdAt: now,
      updatedAt: now
    } 
    const res = await db.set<Contact>(["contacts", id], contact);

    if (res.ok === true) {
      return new Response(null, { status: STATUS_CODE.Created });
    } else {
      throw new Error("Failed to save contact request.")
    }
  }
}
