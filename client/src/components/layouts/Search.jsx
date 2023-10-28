import { useState, useEffect } from 'react'
import Navbar from './Navbar'

// We no longer need the users variable so you can remove it from here

const Search = () => {
  // add this state
  const [apiUsers, setApiUsers] = useState([])
  const [searchItem, setSearchItem] = useState('')
  // set the initial state of filteredUsers to an empty array
  const [filteredUsers, setFilteredUsers] = useState([])


  // fetch the users
  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then(response => response.json())
      // save the complete list of users to the new state
      .then(data => setApiUsers(data.users))
      // if there's an error we log it to the console
      .catch(err => console.log(err))
  }, [])

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm)

    // filter the items using the apiUsers state
    const filteredItems = apiUsers.filter((user) =>
      user.lastName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredUsers(filteredItems);
  }

  return (
    <>
      <Navbar />
      <body className='min-h-screen bg-gradient-to-r from-yellow-200 via-pink-200 to-pink-400'>
      <div className="w-4/6 mx-auto">
        <div className="mb-3 xl:w-3/4 mx-auto mt-3">
          <div className="relative mb-4 flex w-full flex-wrap items-stretch">
            <input
              type="search"
              className="relative m-0 block flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon2"
              onChange={handleInputChange} />
            {/* <!--Search icon--> */}
            <span
              className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
              id="basic-addon2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5">
                <path
                  fillRule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clipRule="evenodd" />
              </svg>
            </span>
          </div>
        </div>
        {filteredUsers.map(user =>
          <div className="mx-auto w-3/4 mt-8 justify-content-left hover:underline  hover:rounded transition duration-500 transform" key={user.id}>
            <div className="border-l-2 border-gray-500 pl-8">

              <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-bold mb-2"><a href='www.google.com' className='text-black'>{user.lastName}</a></h3>
                <p className="text-gray-600 text-sm"></p>
              </div>

            </div>
          </div>
        )}

      </div>
      </body>
    </>
  )
}

export default Search; 