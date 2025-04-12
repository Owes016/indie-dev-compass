
import { useState } from "react";
import { 
  format, 
  startOfMonth, 
  endOfMonth, 
  eachDayOfInterval, 
  isSameMonth,
  isSameDay,
  addMonths,
  subMonths,
  getDay
} from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import LayoutHeader from "@/components/LayoutHeader";
import { mockProjects } from "@/data/mockData";
import { Task } from "@/types";

// Get all tasks with due dates from all projects
const getAllTasksWithDueDates = (): Array<Task & { projectId: string; projectName: string }> => {
  return mockProjects.flatMap(project => 
    project.tasks
      .filter(task => task.dueDate)
      .map(task => ({
        ...task,
        projectId: project.id,
        projectName: project.name
      }))
  );
};

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const tasksWithDueDates = getAllTasksWithDueDates();
  
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = monthStart;
  const endDate = monthEnd;
  
  const dateFormat = "MMMM yyyy";
  const days = eachDayOfInterval({ start: startDate, end: endDate });
  
  const getTasksForDay = (date: Date) => {
    return tasksWithDueDates.filter(task => {
      if (!task.dueDate) return false;
      const taskDate = new Date(task.dueDate);
      return isSameDay(taskDate, date);
    });
  };
  
  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };
  
  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };
  
  const renderDays = () => {
    const dateFormat = "EEE";
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return (
      <div className="grid grid-cols-7 mb-2">
        {daysOfWeek.map((day, i) => (
          <div key={i} className="py-2 text-center text-sm font-medium text-muted-foreground">
            {day}
          </div>
        ))}
      </div>
    );
  };
  
  const renderCells = () => {
    // Fill in days from previous month to start grid correctly
    const startDay = getDay(monthStart);
    const endDay = getDay(monthEnd);
    
    // Create grid array with empty cells for proper alignment
    const totalDays = days.length;
    const totalCells = startDay + totalDays + (6 - endDay);
    const rows = Math.ceil(totalCells / 7);
    const grid = Array.from({ length: rows * 7 });
    
    // Fill the grid with days
    return (
      <div className="grid grid-cols-7 gap-1">
        {Array.from({ length: startDay }).map((_, i) => (
          <div key={`empty-start-${i}`} className="min-h-[100px] p-2"></div>
        ))}
        
        {days.map((day, i) => {
          const dayTasks = getTasksForDay(day);
          const isCurrentMonth = isSameMonth(day, currentMonth);
          
          return (
            <div 
              key={`day-${i}`}
              className={`min-h-[100px] p-2 border border-white/10 rounded-md ${
                isCurrentMonth ? 'bg-secondary/50' : 'bg-secondary/20 opacity-50'
              }`}
            >
              <div className="text-right mb-1">
                <span className="text-sm font-medium">
                  {format(day, 'd')}
                </span>
              </div>
              
              <div className="space-y-1">
                {dayTasks.map((task, idx) => (
                  <div 
                    key={`task-${idx}`}
                    className={`px-2 py-1 text-xs rounded-sm truncate ${
                      task.completed ? 'bg-green-950/50 text-green-400' : 'bg-accent/50'
                    }`}
                  >
                    {task.title}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
        
        {Array.from({ length: 6 - endDay }).map((_, i) => (
          <div key={`empty-end-${i}`} className="min-h-[100px] p-2"></div>
        ))}
      </div>
    );
  };
  
  return (
    <Layout>
      <LayoutHeader title="Calendar" />
      
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-medium">
          {format(currentMonth, dateFormat)}
        </h2>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" onClick={prevMonth}>
            <ChevronLeft size={16} />
          </Button>
          <Button 
            variant="ghost"
            onClick={() => setCurrentMonth(new Date())}
          >
            Today
          </Button>
          <Button variant="outline" size="icon" onClick={nextMonth}>
            <ChevronRight size={16} />
          </Button>
        </div>
      </div>
      
      <div className="bg-secondary/30 border border-white/10 rounded-lg p-4">
        {renderDays()}
        {renderCells()}
      </div>
    </Layout>
  );
};

export default Calendar;
