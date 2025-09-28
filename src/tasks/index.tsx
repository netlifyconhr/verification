// import { ConfigDrawer } from '@/components/config-drawer'
// import { Header } from '@/components/layout/header'
import { Main } from "@/components/layout/main";
// import { ProfileDropdown } from '@/components/profile-dropdown'
// import { Search } from '@/components/search'
// import { ThemeSwitch } from '@/components/theme-switch'
import axiosInstance from "@/lib/axios-instance";
import { toast } from "sonner";
import { TasksDialogs } from "./components/tasks-dialogs";
import { TasksProvider } from "./components/tasks-provider";
import { TasksTable } from "./components/tasks-table";

enum offerLetterStatus {
  ALL = "all",
  DRAFT = "draft",
  SENT = "send",
  FAILED = "failed",
}

type FetchSentEmailsParams = {
  page?: number;
  limit?: number;
  searchTerm?: string;
  status: offerLetterStatus;
  date?: string;
};

export interface IOfferLetter {
  employeeName: string;
  employeeEmail: string;
  employeeAddress: string;
  employeeDesignation: string;
  employeeDateOfJoin: string;
  employeeCtc: string;
  companyLogo: string;
  companyName: string;
  companyAddress: string;
  offerLetterDate: string;
  companyContactName: string;
  companyPersonTitle: string;
  companyContactNumber: string;
  companyPersonalEmail: string;
  emailSubject: string;
  emailMessage: string;
  status: offerLetterStatus;
  generateByUser: string;
  createdAt: string;
  _id: string;
}

async function fetchSentEmails({
  page = 1,
  limit = 5,
  searchTerm = "",
  status = offerLetterStatus.ALL,
  date,
}: FetchSentEmailsParams): Promise<TResponse<IOfferLetter[]> | undefined> {
  try {
    const params: Record<string, string | number> = {
      page,
      limit,
      ...(searchTerm && { searchTerm }),
      // month,
      // year,
    };
    if (status !== offerLetterStatus.ALL) {
      params.status = status;
    }
    // if (date) {
    //   params.month = date;
    // }
    const response = await axiosInstance.get<TResponse<IOfferLetter[]>>(
      "/background-varification",
      { params }
    );
    return response.data;
  } catch (error: unknown) {
    const errMsg =
      error instanceof Error ? error.message : "Something went wrong!";
    toast.error(errMsg);
  }
}
export function Tasks() {
  return (
    <TasksProvider>
      {/* <Header fixed>
        <Search />
        <div className='ms-auto flex items-center space-x-4'>
          <ThemeSwitch />
          <ConfigDrawer />
          <ProfileDropdown />
        </div>
      </Header> */}

      <Main>
        <div className="mb-2 flex flex-wrap items-center justify-between space-y-2 gap-x-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Employees</h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of your employees varification for this month!
            </p>
          </div>
          {/* <TasksPrimaryButtons /> */}
        </div>
        <div className="-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-y-0 lg:space-x-12">
          <TasksTable />
        </div>
      </Main>

      <TasksDialogs />
    </TasksProvider>
  );
}
