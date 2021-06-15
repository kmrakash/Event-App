import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { EventList } from "./components/EventList/eventList"
import useQueryString from './useQueryString'

function App ()
{

  const [ event, setEvent ] = useQueryString( "event_category", "ALL_EVENTS" );
  const [ subevent, setSubEvent ] = useQueryString( "event_sub_category", "Upcoming" );


  return (
    <div className="grid place-items-center">
      <Router>

        <Navbar
          event={event}
          setEvent={setEvent}
          subEvent={subevent}
          setSubEvent={setSubEvent}
        />
        <Route path="/">
          <div>
            <EventList event={event} subEvent={subevent} />
          </div>
        </Route>
      </Router>


    </div>
  )
}

export default App
