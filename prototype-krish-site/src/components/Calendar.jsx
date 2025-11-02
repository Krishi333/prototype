import { useState } from 'react';
import CalSideBar from './CalendarComps/CalSideBar';
import Dates from './CalendarComps/Dates';
import DetailedView from './PopUpViewComps/DetailedView';

function Calendar() {
  const [showTaskDetails, setShowTaskDetails] = useState(false);

  const handleTaskClick = () => {
    setShowTaskDetails(true);
  };

  const handleTaskDetailsDone = () => {
    setShowTaskDetails(false);
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ width: '200px' }}>
        <CalSideBar />
      </div>
      <div style={{ flex: 1, padding: '20px' }}>
        <Dates onClickTask={handleTaskClick} />
        {showTaskDetails && (
          <div className="modal show" style={{
            display: 'block',
            backgroundColor: 'rgba(0,0,0,0.5)'
          }}>
            <div className="modal-dialog">
              <div className="modal-content">
                <DetailedView onClickDone={handleTaskDetailsDone} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Calendar;