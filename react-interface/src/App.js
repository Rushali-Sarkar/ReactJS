import { useState, useEffect, useCallback } from "react";
import { BiCalendar } from "react-icons/bi";
import Search from "./Components/Search.js";
import AddAppointment from  "./Components/AddAppointment.js";
import AppointmentInfo from "./Components/AppointmentInfo.js";

function App() {
  let [AppointmentList, setAppointmentList] = useState([]);
  let [query, setQuery] = useState("");
  let [sortBy, setSortBy] = useState("petName");
  let [orderBy, setOrderBy] = useState("ascending");
  const filteredAppointments = AppointmentList.filter(
    item => {
      return (
        item.petName.toLowerCase().includes(query.toLowerCase()) ||
        item.ownerName.toLowerCase().includes(query.toLowerCase()) ||
        item.aptNotes.toLowerCase().includes(query.toLowerCase())
      )}
  ).sort((a, b) => {
    let order = (orderBy === "ascending" ? 1: -1);
    return (a[sortBy].toLowerCase() < b[sortBy].toLowerCase() ? -1 * order: 1 * order);
  });
  const fetchData = useCallback(() => {
      fetch('./data.json')
      .then(response => response.json())
      .then(data => {
        setAppointmentList(data)})
    }, []);
    useEffect(() => {fetchData()}, [fetchData]);
  return (
    <div className="App container mx-auto mt-3 font-thin">
     <h1 className="text-5xl mb-3">
       <BiCalendar className="inline-block text-red-400 align-top"/>
       Your Appointments</h1>
       <AddAppointment 
       onSendAppointment={myAppointment => setAppointmentList([...AppointmentList, myAppointment])}
       lastId={AppointmentList.reduce((max, item) => Number(item.id) > max ? Number(item.id): max, 0)}/>
       <Search query={query}
       onQueryChange={myQuery => setQuery(myQuery)}
       sortBy={sortBy}
       onSortByChange={mySort => setSortBy(mySort)}
       orderBy={orderBy}
       onOrderByChange={myOrder => setOrderBy(myOrder)} />
       <ul className="divide-y divide-gray-200">
         {filteredAppointments.map(
           (appointment) => (
              <AppointmentInfo key={appointment.id} 
              appointment={appointment}
              onDeleteAppointment={
                appointmentmentId => setAppointmentList(AppointmentList.filter(
                  appointment => appointment.id !== appointmentmentId
                ))
              } />
           ))
         }
       </ul>
    </div>
  );
}

export default App;
