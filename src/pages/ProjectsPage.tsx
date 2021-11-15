import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import LazyLoad from 'react-lazy-load';

import fam_entrance from '../images/projects/government/fam/entrance.jpg'
import fam_hop from '../images/projects/government/fam/hop_interior.jpg'
import fam_southgallery from '../images/projects/government/fam/south_gallery.jpg'
import fam_touch from '../images/projects/government/fam/touch.jpg'
import fam_walk from '../images/projects/government/fam/walk.jpg'

import nbroad_chairs from '../images/projects/commercial/1007nbroadway/roof_chairs.jpg'
import nbroad_garden from '../images/projects/commercial/1007nbroadway/roof_garden.jpg'
import nbroad_umbrellas from '../images/projects/commercial/1007nbroadway/roof_umbrellas.jpg'
import nbroad_top from '../images/projects/commercial/1007nbroadway/rooftop.jpg'

import tennbroad_bikes from '../images/projects/commercial/1015nbroadway/bike_shop.jpg'
import tennbroad_board from '../images/projects/commercial/1015nbroadway/board.jpg'
import tennbroad_conference from '../images/projects/commercial/1015nbroadway/conference.jpg'
import tennbroad_lobby from '../images/projects/commercial/1015nbroadway/lobby_desk.jpg'
import tennbroad_lounge from '../images/projects/commercial/1015nbroadway/lounge.jpg'
import tennbroad_studio from '../images/projects/commercial/1015nbroadway/studio.jpg'

import cbl_ceiling from '../images/projects/commercial/citizensbank_lobby/ceiling.jpg'
import cbl_curve from '../images/projects/commercial/citizensbank_lobby/curve.jpg'
import cbl_entrance from '../images/projects/commercial/citizensbank_lobby/entrance.jpg'
import cbl_chairs from '../images/projects/commercial/citizensbank_lobby/lobby_chairs.jpg'
import cbl_offices from '../images/projects/commercial/citizensbank_lobby/offices.jpg'
import cbl_studio from '../images/projects/commercial/citizensbank_lobby/studio.jpg'
import cbl_wide from '../images/projects/commercial/citizensbank_lobby/wide.jpg'

import pt_board from '../images/projects/commercial/perimiter_tech/board.jpg'
import pt_door from '../images/projects/commercial/perimiter_tech/door.jpg'
import pt_hall from '../images/projects/commercial/perimiter_tech/hall.jpg'
import pt_night from '../images/projects/commercial/perimiter_tech/night.jpg'
import pt_southwest from '../images/projects/commercial/perimiter_tech/southwest.jpg'
import pt_window from '../images/projects/commercial/perimiter_tech/window.jpg'

import edmondpw_break from '../images/projects/government/edmond_publicworks/all_break.jpg'
import edmondpw_area from '../images/projects/government/edmond_publicworks/break_area.jpg'
import edmondpw_front from '../images/projects/government/edmond_publicworks/front.jpg'
import edmondpw_interior from '../images/projects/government/edmond_publicworks/interior.jpg'
import edmondpw_south from '../images/projects/government/edmond_publicworks/south.jpg'
import edmondpw_wide from '../images/projects/government/edmond_publicworks/wide.jpg'

import famvc_ceiling from '../images/projects/government/fam_visitorcenter/ceiling.jpg'
import famvc_corner from '../images/projects/government/fam_visitorcenter/corner.jpg'
import famvc_morning from '../images/projects/government/fam_visitorcenter/morning.jpg'
import famvc_night from '../images/projects/government/fam_visitorcenter/night_fly.jpg'
import famvc_swing from '../images/projects/government/fam_visitorcenter/swing.jpg'
import famvc_whole from '../images/projects/government/fam_visitorcenter/whole.jpg'

import guymon_fd_doors from '../images/projects/government/guymon_firedept/doors.jpg'
import guymon_fd_doors_open from '../images/projects/government/guymon_firedept/doors_open.jpg'
import guymon_fd_front from '../images/projects/government/guymon_firedept/front.jpg'
import guymon_fd_sign from '../images/projects/government/guymon_firedept/sign.jpg'

import toc_ballroom from '../images/projects/hospitality/21c/ballroom.jpg'
import toc_kitchen from '../images/projects/hospitality/21c/eddys_kitchen.jpg'
import toc_lobby from '../images/projects/hospitality/21c/elevator_lobby.jpg'
import toc_exterior from '../images/projects/hospitality/21c/exterior_dusk.jpg'
import toc_woozie from '../images/projects/hospitality/21c/exterior_woozie.jpg'
import toc_desk from '../images/projects/hospitality/21c/front_desk.jpg'
import toc_guestroom from '../images/projects/hospitality/21c/guest_room.jpg'
import toc_lightwell from '../images/projects/hospitality/21c/guestroom_lightwell.jpg'
import toc_living from '../images/projects/hospitality/21c/living_area.jpg'
import toc_suite from '../images/projects/hospitality/21c/loft_suite.jpg'
import toc_bench from '../images/projects/hospitality/21c/penthouse_bench.jpg'

import uco_wantland_exterior from '../images/projects/educational/uco_wantlandstadium/southwest.jpg'
import uco_wantland_east from '../images/projects/educational/uco_wantlandstadium/southeast.jpg'
import uco_wantland_covered from '../images/projects/educational/uco_wantlandstadium/cover.jpg'

import monroe_elementary_front from '../images/projects/educational/monroe_elementary/front.jpg'
import monroe_elementary_northwest from '../images/projects/educational/monroe_elementary/northwest.jpg'
import monroe_elementary_bench from '../images/projects/educational/monroe_elementary/bench.jpg'

import firstum_day from '../images/projects/faith_based/first_united_methodist/day.jpg'
import firstum_night from '../images/projects/faith_based/first_united_methodist/night.jpg'

import vc_admin_entry from '../images/projects/health_care/varietycare_admin/entry.jpg'
import vc_admin_fly from '../images/projects/health_care/varietycare_admin/fly.jpg'
import vc_admin_morning from '../images/projects/health_care/varietycare_admin/morning.jpg'
import vc_admin_rear from '../images/projects/health_care/varietycare_admin/morning_rear.jpg'
import vc_admin_night from '../images/projects/health_care/varietycare_admin/night.jpg'
import vc_admin_reception from '../images/projects/health_care/varietycare_admin/reception.jpg'

import autumn_ridge_back from '../images/projects/community/autumn_ridge/back.jpg'
import autumn_ridge_front from '../images/projects/community/autumn_ridge/front.jpg'
import autumn_ridge_close from '../images/projects/community/autumn_ridge/front_close.jpg'
import autumn_ridge_pool from '../images/projects/community/autumn_ridge/pool.jpg'

import taylor_dental_cover from '../images/projects/dental/taylor_dental/cover.jpg'
import taylor_dental_ext from '../images/projects/dental/taylor_dental/ext.jpg'
import taylor_dental_left from '../images/projects/dental/taylor_dental/ext_left.jpg'

import edmond_cc_angled from '../images/projects/recreational/edmond_centercourt/angled.jpg'
import edmond_cc_front from '../images/projects/recreational/edmond_centercourt/front.jpg'
import edmond_cc_interior from '../images/projects/recreational/edmond_centercourt/interior.jpg'
import edmond_cc_mez from '../images/projects/recreational/edmond_centercourt/mez.jpg'
import edmond_cc_walkway from '../images/projects/recreational/edmond_centercourt/walkway.jpg'

import evoke_bar from '../images/projects/restaurant/evoke/bar.jpg'
import evoke_exterior from '../images/projects/restaurant/evoke/exterior.jpg'
import evoke_interior from '../images/projects/restaurant/evoke/interior.jpg'
import evoke_interior2 from '../images/projects/restaurant/evoke/interior2.jpg'

import rbm_interior from '../images/projects/restaurant/riviere_bahn_mi/interior_1.jpg'
import rbm_interior2 from '../images/projects/restaurant/riviere_bahn_mi/interior_2.jpg'
import rbm_interior3 from '../images/projects/restaurant/riviere_bahn_mi/interior_3.jpg'

import corbett_back from '../images/projects/residential/corbett_residence/back.jpg'
import corbett_cover from '../images/projects/residential/corbett_residence/cover.jpg'
import corbett_cover2 from '../images/projects/residential/corbett_residence/cover_2.jpg'
import corbett_lake from '../images/projects/residential/corbett_residence/lake.jpg'
import corbett_wide from '../images/projects/residential/corbett_residence/wide.jpg'

import french_back from '../images/projects/residential/french_residence/back.jpg'
import french_day from '../images/projects/residential/french_residence/day.jpg'
import french_drive from '../images/projects/residential/french_residence/drive.jpg'
import french_exterior from '../images/projects/residential/french_residence/exterior.jpg'
import french_walk from '../images/projects/residential/french_residence/walk.jpg'
import french_warm from '../images/projects/residential/french_residence/warm.jpg'

import wcn3_drive from '../images/projects/in_the_works/okc_wellness_3/drive.jpg'
import wcn3_entry from '../images/projects/in_the_works/okc_wellness_3/entry.jpg'
import wcn3_gym from '../images/projects/in_the_works/okc_wellness_3/gym.jpg'
import wcn3_lobby from '../images/projects/in_the_works/okc_wellness_3/lobby.jpg'
import wcn3_parking from '../images/projects/in_the_works/okc_wellness_3/parking.jpg'

import reaves_park_drone from '../images/projects/in_the_works/reaves_park/drone.jpg'
import reaves_park_entry from '../images/projects/in_the_works/reaves_park/entry.jpg'
import reaves_park_night from '../images/projects/in_the_works/reaves_park/night.jpg'
import reaves_park_plaza from '../images/projects/in_the_works/reaves_park/plaza.jpg'

const ProjectType = {
  All: {id: 0, name: "All", desc: "All our Projects."},
  Commercial: {id: 1, name: "Commercial", desc: "Large scale projects usually for company use."},
  Corperate: {id: 2, name: "Corperate", desc: "Projects owned by a corperation."},
  Government: {id: 3, name: "Government", desc: "Government owned projects."},
  Institutional: {id: 4, name: "Institutional", desc: "Projects owned by an individual Institution."},
  Educational: {id: 5, name: "Educational", desc: "School and University projects."},
  Recreational: {id: 6, name: "Recreational", desc: "Projects for Recreational use."},
  Hospitality: {id: 7, name: "Hospitality", desc: "Hotels and other places to stay."},
  Restaurant: {id: 8, name: "Restaurant", desc: "Places to visit for a bite to eat."},
  Residential: {id: 9, name: "Residentail", desc: "Private homes."},
  HealthCare: {id: 10, name: "Health Care", desc: "Hospitals and Doctor's offices."},
  Dental: {id: 11, name: "Dental", desc: "Dental offices, orthodontist offices."},
  Community: {id: 12, name: "Community", desc: "Community Projects."},
  FaithBased: {id: 13, name: "Faith Based", desc: "Places of worship."},
  InTheWorks: {id: 14, name: "In the Works", desc: "Projects not yet under construction."}
} as const

const categories = [ProjectType.All, ProjectType.Commercial, ProjectType.Corperate, ProjectType.Government, ProjectType.Institutional, 
  ProjectType.Educational, ProjectType.Recreational, ProjectType.Hospitality, ProjectType.Restaurant, ProjectType.Residential, ProjectType.HealthCare,
  ProjectType.Dental, ProjectType.Community, ProjectType.FaithBased, ProjectType.InTheWorks]

const projects = [
  {name: "First Americans Museum", category: ProjectType.Government, date: "2021", desc: "First Americans Museum (FAM) celebrates the 39 Native Nations of Oklahoma.  Located on a reclaimed oil field site on the intersection of I-35 and I-40, the project commenced in the late '90s.  The selected design team, Johnson Fain, design architect, and Hornbeek Blatt, co-prime architect, remained constant with the project after several financial delays, finishing construction in 2021.  The design of the 175,000 sq. ft. building/site showcases themes consitent for all tribes and for this reason the building materials are simple: glass, steel, wood and concrete and organized in a series of radial geometries speaking to the spiritual significance of the unending circular forms from which life originates, continues and begins anew.  The site generates from two primary circular forms: earthen and building.  The FAM mound is reminiscent of the prehistoric Spiro mound forms and acts as a solar calendar celebrating the setting sun of the winter solstice thru the concrete west passage, and the setting of the sun of the summer solstice on the mound peak.  At the intersection of the natural and building forms is The Hall of The People, symbolic place of reconciliation between all Peoples.  The museum contains exhibit spaces, multi-purpose theater, cafe, restaurant, classrooms and administration offices.", images: [fam_entrance, fam_hop, fam_southgallery, fam_touch, fam_walk]},
  {name: "1007 N Broadway", category: ProjectType.Commercial, date: "2010", desc: "A revitalization project of an abandoned, dormant building in the Automobile Alley district of Downtown Oklahoma City into a vitable retail space.  As a past automobile dealership, teh building was determined to be a contributing structure to the overall historic district.  Working with the National Parks Service, as well as the State Historical Preservation Architects, this revitalized facility contains an historically appropriate shell, with a contemporary interior along with a roof top terrace for entertaining and events.  The firm received an AIA Merit Award from the Central Oklahoma Chapter for this green roof design.", images: [nbroad_umbrellas, nbroad_chairs, nbroad_garden, nbroad_top]},
  {name: "1015 N Broadway", category: ProjectType.Commercial, date: "2007", desc: "Located in hte Historic Automobile Alley district of Downtown Oklahoma City, this abandoned building had fallen into a serious deteriorated state.  Working with the State Historical Preservation Architect, the building has been fully resotred and leased.  The new facility contains historically appropriate tenant finish out spaces for retail establishments on the ground leve and commercial businesses on the second and third floors.", images: [tennbroad_lobby, tennbroad_board, tennbroad_lounge, tennbroad_studio, tennbroad_conference, tennbroad_bikes]},
  {name: "Citizens Bank Lobby", category: ProjectType.Commercial, date: "0000", desc: "Placeholder description", images: [cbl_wide, cbl_curve, cbl_ceiling, cbl_entrance, cbl_chairs, cbl_offices, cbl_studio]},
  {name: "Perimiter Tech", category: ProjectType.Corperate, date: "0000", desc: "Placeholder description", images: [pt_night, pt_southwest, pt_hall, pt_window, pt_door, pt_board]},
  {name: "Edmond Public Works", category: ProjectType.Government, date: "0000", desc: "Placeholder description", images: [edmondpw_wide, edmondpw_break, edmondpw_area, edmondpw_front, edmondpw_interior, edmondpw_south]},
  {name: "First Americans Museum Visitor Center", category: ProjectType.Government, date: "0000", desc: "Placeholder description", images: [famvc_swing, famvc_whole, famvc_ceiling, famvc_corner, famvc_morning, famvc_night]},
  {name: "Guymon Fire Department", category: ProjectType.Government, date: "0000", desc: "Placeholder description", images: [guymon_fd_front, guymon_fd_doors_open, guymon_fd_sign, guymon_fd_doors]},
  {name: "21c Museum Hotel", category: ProjectType.Hospitality, date: "0000", desc: "Placeholder description", images: [toc_exterior, toc_ballroom, toc_kitchen, toc_lobby, toc_woozie, toc_desk, toc_guestroom, toc_lightwell, toc_living, toc_suite, toc_bench]},
  {name: "UCO Wantland Stadium", category: ProjectType.Educational, date: "0000", desc: "Placeholder description", images: [uco_wantland_exterior, uco_wantland_east, uco_wantland_covered]},
  {name: "Monroe Elementary", category: ProjectType.Educational, date: "0000", desc: "Placeholder description", images: [monroe_elementary_front, monroe_elementary_northwest, monroe_elementary_bench]},
  {name: "First United Methodist", category: ProjectType.FaithBased, date: "0000", desc: "Placeholder description", images: [firstum_day, firstum_night]},
  {name: "Variety Care Admin", category: ProjectType.HealthCare, date: "0000", desc: "Placeholder description", images: [vc_admin_entry, vc_admin_fly, vc_admin_night, vc_admin_morning, vc_admin_reception, vc_admin_rear]},
  {name: "Autumn Ridge", category: ProjectType.FaithBased, date: "0000", desc: "Placeholder description", images: [autumn_ridge_front, autumn_ridge_pool, autumn_ridge_back, autumn_ridge_close]},
  {name: "Taylor Dental Clinic", category: ProjectType.Dental, date: "0000", desc: "Placeholder description", images: [taylor_dental_ext, taylor_dental_left, taylor_dental_cover]},
  {name: "Edmond Center Court", category: ProjectType.Recreational, date: "0000", desc: "Placeholder description", images: [edmond_cc_angled, edmond_cc_front, edmond_cc_interior, edmond_cc_mez, edmond_cc_walkway]},
  {name: "Evoke", category: ProjectType.Restaurant, date: "0000", desc: "Placeholder description", images: [evoke_exterior, evoke_bar, evoke_interior, evoke_interior2]},
  {name: "Riviere Bahn Mi", category: ProjectType.Restaurant, date: "0000", desc: "Placeholder description", images: [rbm_interior, rbm_interior2, rbm_interior3]},
  {name: "Private Residence", category: ProjectType.Residential, date: "0000", desc: "Placeholder description", images: [corbett_back, corbett_cover2, corbett_lake, corbett_wide, corbett_cover]},
  {name: "Private Residence", category: ProjectType.Residential, date: "0000", desc: "Placeholder description", images: [french_drive, french_warm, french_back, french_day, french_exterior, french_walk]},
  {name: "OKC Wellness Center #3", category: ProjectType.Recreational, date: "0000", desc: "Placeholder description", images: [wcn3_entry, wcn3_drive, wcn3_gym, wcn3_lobby, wcn3_parking]},
  {name: "Reaves Park", category: ProjectType.Recreational, date: "0000", desc: "Placeholder description", images: [reaves_park_drone, reaves_park_entry, reaves_park_night, reaves_park_plaza]},
]
  
const sortFilters = ["Favorites", "Newest", "Oldest", "Alphabetical"]

const ProjectsPage = () => {

  const [typeFilter, setTypeFilter] = useState(ProjectType.All);

    return (
      <div>
        <FilterBar setType={setTypeFilter} />
        <ProjectList filter={typeFilter} />
        <Footer />
      </div>
    )
};

const FilterBar = ({setType}, {setType: any}) => {
  return(
    <div className="fixed bg-white flex flex-row border-b border-gray-400 w-full z-40">
      <p className="flex items-center text-sm border-r border-gray-400 px-3 bg-gray-100">Filter:</p>
      <CategoryFilter setType={setType} />
      <p className="flex items-center text-sm border-r border-gray-400 px-3 bg-gray-100">Sort:</p>
      <SortFilter />
    </div>
  )
}

const CategoryFilter = ({setType}, {setType: any}) => {

  function setSelectedWrap(selected) {
    setType(selected);
    setSelected(selected);
  }

  const [selected, setSelected] = useState(ProjectType.All)

  return (
    <div className="w-72 sticky top-16 z-20">
      <Listbox value={selected} onChange={setSelectedWrap}>
        <div className="relative">
          <Listbox.Button className="relative w-full py-2 pl-3 pr-10 border-r border-gray-400 text-left bg-white cursor-default focus:outline-none sm:text-sm">
            <span className="block truncate">{selected.name}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <SelectorIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
            </span>
          </Listbox.Button>
          <Transition as={Fragment} 
                enter="transition ease-out duration-50" enterFrom="opacity-0" enterTo="opacity-100"
                leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
            <Listbox.Options className="absolute w-full py-1 overflow-auto text-base bg-white max-h-60 border-gray-400 border sm:text-sm">
              {categories.map((category, categoryIdx) => (
                <Listbox.Option key={categoryIdx} className={({ active }) => `${active ? 'text-gray-900 bg-gray-100' : 'text-gray-900'} cursor-default select-none relative py-2 pl-10 pr-4 z-20`} value={category}>
                  {({ selected, active }) => (
                    <>
                      <span className={`${selected ? 'font-medium' : 'font-normal'} block truncate`}>{category.name}</span>
                      {selected &&
                        <span className={`${active ? 'text-gray-600' : 'text-gray-600'} absolute inset-y-0 left-0 flex items-center pl-3`}>
                          <CheckIcon className="w-5 h-5" aria-hidden="true" />
                        </span>}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}

const SortFilter = () => {
  const [selected, setSelected] = useState(sortFilters[0])

  return (
    <div className="w-72 sticky top-16 z-20">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative">
          <Listbox.Button className="relative w-full py-2 pl-3 pr-10 border-r border-gray-400 text-left bg-white cursor-default focus:outline-none sm:text-sm">
            <span className="block truncate">{selected}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <SelectorIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
            </span>
          </Listbox.Button>
          <Transition as={Fragment} 
                enter="transition ease-out duration-50" enterFrom="opacity-0" enterTo="opacity-100"
                leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
            <Listbox.Options className="absolute w-full py-1 overflow-auto text-base bg-white max-h-60 border-gray-400 border sm:text-sm">
              {sortFilters.map((sortBy, categoryIdx) => (
                <Listbox.Option key={categoryIdx} className={({ active }) => `${active ? 'text-gray-900 bg-gray-100' : 'text-gray-900'} cursor-default select-none relative py-2 pl-10 pr-4 z-20`} value={sortBy}>
                  {({ selected, active }) => (
                    <>
                      <span className={`${selected ? 'font-medium' : 'font-normal'} block truncate`}>{sortBy}</span>
                      {selected &&
                        <span className={`${active ? 'text-gray-600' : 'text-gray-600'} absolute inset-y-0 left-0 flex items-center pl-3`}>
                          <CheckIcon className="w-5 h-5" aria-hidden="true" />
                        </span>}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}

const ProjectList = ({filter}, {filter: any}) => {

  return(
    <div className="flex-wrap flex self-center w-full mt-16">
      {projects.map((p, keyID) => (p.category === filter || filter === ProjectType.All) && <ProjectCard key={keyID} name={p.name} date={p.date} desc={p.desc} images={p.images} />)}
    </div>
  )
}

const ProjectCard = ({name, date, desc, images}: {name: string, date: string, desc: string, images: any}) => {

  const [open, setOpen] = useState(false);

  return(
    <>
      <Transition
          className="fixed w-full left-0 bg-white z-40 mt-9 border-t border-gray-400" style={{height: 'calc(100% - 100px)'}}
          as="div"
          show={open}
          enter="transition-opacity duration-75"
          enterFrom="opacity-0"
          enterTo="opacity-100 block"
          leave="transition-opacity duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0 hidden">
        <div className="w-full bg-white z-40 h-full">
          <div className="absolute transform bg-gray-100 border-l border-t border-gray-400 h-9 w-9 right-0 p-1 cursor-pointer z-50 hover:bg-red-100" 
                style={{translate: '0px -37px'}}
                onClick={() => setOpen(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <div className="w-full h-full grid grid-cols-1 place-items-center">
            <div className="w-full h-3/4 top-0 absolute lg:h-full">
              <Carousel images={images} autoAdvance={false} />
            </div>
            <div className="bg-white lg:bg-opacity-80 h-1/4 absolute w-full bottom-0 flex items-baseline border-t border-gray-400">
              <p className="flex-shrink lg:flex-grow"></p>
              <div className="w-full lg:w-3/4 lg:flex-row flex-col flex px-2">
                <div className="lg:m-4 flex-shrink flex flex-row lg:flex-col">
                  <p className="font-semibold mx-1">{name}</p>
                  <p className="mx-1">{date}</p>
                </div>
                <p className="lg:m-4 mx-1 text-sm md:text-md">
                  {desc}
                </p>
              </div>
              <p className="flex-shrink lg:flex-grow"></p>
            </div>
          </div>
        </div>
      </Transition>

      <LazyLoad offsetVertical={600} height={500} className="lg:w-1/2 w-full h-half">
        <div className="w-full h-full group bg-cover bg-center" 
          style={{ backgroundImage: `url(${images[0]})` }}
          onClick={() => setOpen(true)}>
          <div className="group-hover:opacity-100 bg-opacity-60 transition-opacity ease-in-out opacity-0 w-full h-full z-10 text-black text-center bg-white">
              <div className="top-1/2 relative mt-8">
                <p className="pt-1 -mt-8 font-bold">{name}</p>
                <p className="pb-3 pt-1 text-xs">{date}</p>
              </div>
          </div>
        </div>
      </LazyLoad>
    </>
  )
}
  
 export default ProjectsPage;
  
