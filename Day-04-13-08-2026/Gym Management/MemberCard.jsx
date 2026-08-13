import React from "react";

const MemberCard=React.memo(
    ({member, markAttendance})=>{
        console.log(`{member.name} Rendered`);

        return(
            <div>
                <h3>{member.name}</h3>
                <p>{member.plan}</p>

                <button onClick={()=>markAttendance(member.id)}>Mark Attendance</button>
            </div>
        )
    }
);
export default MemberCard;