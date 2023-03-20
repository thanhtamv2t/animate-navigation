import { useState } from 'react'
import cx from 'clsx'
const NAV = [
  {
    title: "Home",
    icon: 'home-outline'
  },
  {
    title: 'Profile',
    icon: 'person-outline'
  },
  {
    title: 'Message',
    icon: 'chatbox-outline'
  },
  {
    title: 'Photos',
    icon: 'image-outline'
  },
  {
    title: 'Settings',
    icon: 'settings-outline'
  }
]

function App() {
  const [activeKey, setActiveKey] = useState(0)


  const posX = activeKey * 80 + 22

  const renderNavigation = () => {
    return NAV.map((item, _index) => {
      const isActive = activeKey === _index
      return <div className={cx("nav-item", isActive && 'active')} key={item.title} onClick={() => setActiveKey(_index)}>
        <div className="nav-item__icon">
          {/* @ts-ignore */}
          <ion-icon name={item.icon}></ion-icon>
        </div>
        <div className="nav-item__title">
          <span>
            {item.title}
          </span>
        </div>
      </div>
    })
  }

  return (
    <div className="App">
      <div className="navigation">
        {renderNavigation()}
        <div className="indicator" style={{left: posX}}></div>
      </div>
    </div>
  )
}

export default App
