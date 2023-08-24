export default function LanguagesHero() {
    return (
        // Hero Section that takes up the entire viewport height
        <div className="min-h-screen flex">
            {/* so i gotta style this */}
            <div className="container py-20 mx-auto">
                {/* stuff in the container goes in here */}
                <div class="flex flex-col p-5 justify-evenly bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 borderborder-gray-100 my-5 sm:flex-col content-center hover:backdrop-blur-lg">
                    <p class="text-4xl font-bold text-white text-center">Languages</p>
                    <div class="mt-4 flex flex-row">
                        {/* a div with 3 tabs. one for front end langugages, back end languages, mobile app languages */}
                        <div className='tabs tabs-boxed mx-auto bg-transparent'>
                            <a className='tab tab-lg text-white'>Front End</a>
                            <a className='tab tab-lg text-white'>Back End</a>
                            <a className='tab tab-lg text-white'>Mobile</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function activateTab(event) {
  // Remove the "tab-active" class from all tabs
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => tab.classList.remove('tab-active'));

  // Add the "tab-active" class to the clicked tab
  event.target.classList.add('tab-active');
}

document.addEventListener('DOMContentLoaded', () => {
  // Attach the "activateTab" function to each tab
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => tab.addEventListener('click', activateTab));
});