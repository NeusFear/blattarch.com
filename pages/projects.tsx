import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router'
import { Fragment, useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { projectCategories, ProjectCategoryType, projectList, ProjectTypes, sortFilters } from '../data/ProjectData'

const ProjectsPage = () => {

  const [typeFilter, setTypeFilter] = useState<ProjectCategoryType>(ProjectTypes.All);

  return (
    <div>
      <Navbar />
      <FilterBar setType={setTypeFilter} />
      <ProjectList filter={typeFilter} />
      <Footer />
    </div>
  )
};

const FilterBar = ({ setType }: { setType: (value: ProjectCategoryType) => void }) => {
  return (
    <div className="fixed bg-white flex flex-row border-b border-gray-400 w-full z-40 mt-16">
      <p className="flex items-center text-sm border-r border-gray-400 px-3 bg-gray-100">Filter:</p>
      <CategoryFilter setType={setType} />
      {/*<p className="flex items-center text-sm border-r border-gray-400 px-3 bg-gray-100">Sort:</p> */}
      {/*<SortFilter />*/}
    </div>
  )
}

const CategoryFilter = ({ setType }: { setType: (value: ProjectCategoryType) => void }) => {

  function setSelectedWrap(selected: ProjectCategoryType) {
    setType(selected);
    setSelected(selected);
  }

  const [selected, setSelected] = useState<ProjectCategoryType>(ProjectTypes.All);

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
              {projectCategories.map((category, categoryIdx) => (
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

const ProjectList = ({ filter }: { filter: ProjectCategoryType }) => {

  return (
    <div className="flex-wrap flex self-center w-full mt-24">
      {projectList.map((p, keyID) => (p.category === filter || filter === ProjectTypes.All) && <ProjectCard key={keyID} name={p.name} date={p.date} route={p.route} images={["/images/projects/" + p.category.path + "/" + p.route + "/" + p.cover]} />)}
    </div>
  )
}

const ProjectCard = ({ name, date, route, images }: { name: string, date: string, route: string, images: any }) => {

  const router = useRouter();

  return (
    <div className="md:w-1/2 w-full h-[50vh] group bg-cover bg-center cursor-pointer" style={{ backgroundImage: `url(${images[0]})` }} onClick={() => {router.push('/project/' + route) }}>
      <div className="group-hover:opacity-100 bg-opacity-60 transition-opacity ease-in-out opacity-0 w-full h-full z-10 text-black text-center bg-white">
        <div className="top-1/2 relative mt-8">
          <p className="pt-1 -mt-8 font-bold">{name}</p>
          {date != "0000" && <p className="pb-3 pt-1 text-xs">{date}</p>}
        </div>
      </div>
    </div>
  )
}

export default ProjectsPage;
