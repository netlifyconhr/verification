import { SelectDropdown } from "@/components/select-dropdown";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import axiosInstance from "@/lib/axios-instance";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { type Task } from "../data/schema";

type TaskMutateDrawerProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  currentRow?: Task;
};

const formSchema = z.object({
  title: z.string().min(1, "Title is required."),
  status: z.string().min(1, "Please select a status."),
  label: z.string().min(1, "Please select a label."),
  priority: z.string().min(1, "Please choose a priority."),
});
type TaskForm = z.infer<typeof formSchema>;

export function TasksMutateDrawer({
  open,
  onOpenChange,
  currentRow,
}: TaskMutateDrawerProps) {
  const form = useForm<TaskForm>({
    // resolver: zodResolver(formSchema),
    defaultValues: currentRow ?? {
      title: "",
      status: "",
      label: "",
      priority: "",
    },
  });
  const queryClient = useQueryClient();
  const { mutateAsync: updateEmployeeFn } = useMutation({
    mutationFn: (data) => {
      return axiosInstance.patch(
        `background-varification/update-details/${currentRow?._id}`,
        data
      );
    },
    onSuccess() {
      onOpenChange(false);
      form.reset();
      queryClient.invalidateQueries({
        queryKey: ["VERIFICATION_LIST"],
      });
      toast.success("Updated data successfully!")

    },
  });

  const onSubmit = (data: TaskForm) => {
    // do something with the form data
    console.log(data, "data");
    updateEmployeeFn(data);
    // showSubmittedData(data);
  };

  return (
    <Sheet
      open={open}
      onOpenChange={(v) => {
        onOpenChange(v);
        form.reset();
      }}
    >
      <SheetContent className="flex flex-col">
        <SheetHeader className="text-start">
          <SheetTitle>Update employee details </SheetTitle>
          <SheetDescription>
            Update the employee details by providing necessary info. Click save
            when you&apos;re done.
          </SheetDescription>
        </SheetHeader>
        <Form {...form}>
          <form
            id="tasks-form"
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex-1 space-y-6 overflow-y-auto px-4"
          >
            <FormField
              control={form.control}
              name="adharStatus"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Adhar Status</FormLabel>
                  <SelectDropdown
                    className="w-full"
                    defaultValue={field.value}
                    onValueChange={field.onChange}
                    placeholder="Select a status"
                    items={[
                      { label: "Select a status", value: " " },
                      { label: "Pending", value: "Pending" },

                      { label: "Verified", value: "Verified" },
                      { label: "Not Verified", value: "Not Verified" },
                    ]}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="criminalStatus"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Criminal Record Status</FormLabel>
                  <SelectDropdown
                    className="w-full"
                    defaultValue={field.value}
                    onValueChange={field.onChange}
                    placeholder="Select a status"
                    items={[
                      { label: "Select a status", value: " " },
                      { label: "Pending", value: "Pending" },

                      { label: "Verified", value: "Verified" },
                      { label: "Not Verified", value: "Not Verified" },
                    ]}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
              <FormField
              control={form.control}
              name="addressStatus"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Criminal Status</FormLabel>
                  <SelectDropdown
                    className="w-full"
                    defaultValue={field.value}
                    onValueChange={field.onChange}
                    placeholder="Select a status"
                    items={[
                      { label: "Select a status", value: " " },
                      { label: "Pending", value: "Pending" },

                      { label: "Verified", value: "Verified" },
                      { label: "Not Verified", value: "Not Verified" },
                    ]}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="educationStatus"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Education Status</FormLabel>
                  <SelectDropdown
                    className="w-full"
                    defaultValue={field.value}
                    onValueChange={field.onChange}
                    placeholder="Select a status"
                    items={[
                      { label: "Select a status", value: " " },
                      { label: "Pending", value: "Pending" },

                      { label: "Verified", value: "Verified" },
                      { label: "Not Verified", value: "Not Verified" },
                    ]}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="panStatus"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>PAN Status</FormLabel>
                  <SelectDropdown
                    className="w-full"
                    defaultValue={field.value}
                    onValueChange={field.onChange}
                    placeholder="Select a status"
                    items={[
                      { label: "Select a status", value: " " },
                      { label: "Pending", value: "Pending" },

                      { label: "Verified", value: "Verified" },
                      { label: "Not Verified", value: "Not Verified" },
                    ]}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="experienceStatus"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Experience Status</FormLabel>
                  <SelectDropdown
                    className="w-full"
                    defaultValue={field.value}
                    onValueChange={field.onChange}
                    placeholder="Select a status"
                    items={[
                      { label: "Select a status", value: " " },

                      { label: "Pending", value: "Pending" },
                      { label: "Verified", value: "Verified" },

                      { label: "Not Verified", value: "Not Verified" },
                    ]}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="remarks"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Remarks</FormLabel>
                  <FormControl>
                    <Textarea {...field} placeholder="Enter a remarks" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
        <SheetFooter className="gap-2">
          <Button form="tasks-form" type="submit">
            Save changes
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
