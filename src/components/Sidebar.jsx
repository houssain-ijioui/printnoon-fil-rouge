import SidebarLink from './SidebarLink';

const Sidebar = () => {
  return (
    <div className='w-4/12 h-96 pl-2 flex flex-col gap-y-5 pt-8 lg:w-3/12 md:w-4/12'>
      <SidebarLink link={"/conceptions"} text={"Mes Conceptions"} />
      <SidebarLink link={"/commandes"} text={"Mes Commandes"} />
      <SidebarLink link={"/profile-settings"} text={"Paramètres du compte"} />
    </div>
  )
}

export default Sidebar
