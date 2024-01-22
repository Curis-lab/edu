import { Issue } from "next/dist/build/swc";

interface IStudent {
  name: string;
  major: string;
  gender: string;
  dateOfBrith: Date;
  email: string;
  address: string;
  contactNo: string;
}

class CreateAccount {
  constructor(props: IStudent) {}
  createStudent = () => {
    return null;
  };
  GetStudentInfo = () => {
    return null;
  };
}

export default function Home() {
  function ViewCourseInfo() {
    return null;
  }
  function DropCourse() {
    return null;
  }

  return <div>Hello</div>;
}
