import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { EventList } from "./components/EventList/eventList"
import useQueryString from './useQueryString'
import axios from 'axios'

function App ()
{

  const [ event, setEvent ] = useQueryString( "event_category", "ALL_EVENTS" );
  const [ subevent, setSubEvent ] = useQueryString( "event_sub_category", "Upcoming" );
  // const [ tags, setTags ] = useQueryString( "tags", "" );
  const [ eventTags, setEventTags ] = useState( [] );


  const fetchEventTags = async () =>
  {
    try
    {

      const response = await axios.get( "/event_tags" );
      const { tags } = response.data.data;
      setEventTags( tags );

    } catch ( error )
    {
      console.log( "Failed to fetch event tags", error );
    }
  }

  /**
   * Fetch data on first mount
   */
  useEffect( () =>
  {
    fetchEventTags();
  }, [] );


  return (
    <div className="grid place-items-center">
      <div className="w-4/5 h-auto divide-gray divide-y m-5 border-2 border-solid">
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
    </div>
  )
}

export default App
