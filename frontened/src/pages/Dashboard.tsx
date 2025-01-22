import { useEffect, useState } from 'react'
import '../App.css'
import { Button } from '../components/Button'
import { Plusicon } from '../icons/PlusIcon'
import { ShareIcon } from '../icons/ShareIcon'
import { Card } from '../components/Card'
import { CreateContentModal } from '../components/CreateContentModal'
import { Sidebar } from '../components/Sidebar'
import { useContent } from '../hooks/useContenthook'

export function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const {contents,refresh} = useContent();
  useEffect(()=>{
    refresh();
  },[modalOpen])
  return (<div>
    <Sidebar/>
    <div>
    <div className='ml-72 p-4 min-h-screen border-2 bg-gray-300'>
      <CreateContentModal open={modalOpen} onClose={() => {
        setModalOpen(false);
      }} />
      <div className='flex justify-end p-3'>
        <Button startIcon={<Plusicon />} variant='primary' onClick={() => {setModalOpen(true)}} text={"Add Content"}></Button>  
        <Button startIcon={<ShareIcon />} variant='secondary' onClick={() => { }} text={"Share brain"}></Button>
      </div>
      <div className='flex gap-4 flex-wrap'>
        {contents.map(({title,link,type})=><Card type={type} link={link} title={title}></Card>)}
      </div>
      </div>
      </div>
    </div>
  )
}