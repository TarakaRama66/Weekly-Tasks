import {useState,useMemo,useCallback,} from "react";

import useMembers from "./useMembers";
import MemberCard from "./MemberCard";

function GymApp() {
  const { members } = useMembers();

  const [search, setSearch] = useState("");

  const [attendanceCount,setAttendanceCount] =useState(0);
  const filteredMembers = useMemo(() => {console.log("Filtering Members");

      return members.filter((member) =>member.name.toLowerCase().includes(search.toLowerCase()));
    }, [search, members]);

  const markAttendance = useCallback((id) => {setAttendanceCount((prev) => prev + 1);
      console.log(`Attendance marked for ${id}`);
    }, []);
  return (
    <>
    <h1>*Crazy Fitness*</h1>
      <h2>Today's Attendance:{attendanceCount}</h2>
      <input
        type="text"
        placeholder="Search Member"
        value={search}
        onChange={(e) => setSearch(e.target.value)}/>

      {filteredMembers.map(
        (member) => (
          <MemberCard
            key={member.id}
            member={member}
            markAttendance={markAttendance}/>
        )
      )}
    </>
  );
}
export default GymApp;