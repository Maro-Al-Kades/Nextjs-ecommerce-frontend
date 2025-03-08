import { z } from "zod";

export const createBrandSchema = z.object({
  title: z.string().min(2, "اسم الماركة يجب أن يكون على الأقل حرفين"),
  image: z.string().min(2, "اسم الماركة يجب أن يكون على الأقل حرفين"),
});
