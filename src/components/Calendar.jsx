
import TopBar from "./CalendarComps/TopBar";
import Dates from "./CalendarComps/Dates";
import CalSideBar from "./CalendarComps/CalSideBar";

function Calendar({onClickTask}) {

    return (
        <div>
            <CalSideBar/>
            <TopBar/>
            { <Dates onClickTask={onClickTask}/> }
        </div>
    )
}

export default Calendar