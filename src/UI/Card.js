import { useState } from 'react'
import Modal from './Modal'
import '../components/Portfolio/index.scss'

const Card = ({ projectData }) => {
  const [modalData, setModalData] = useState({})
  const [isHidden, setIsHidden] = useState(true)

  const modalDataHandler = (data) => {
    if (data.id === projectData.id)
      return setModalData({
        name: data.name,
        url: data.url,
        description: data.description,
        image: data.image,
        github: data.github,
      })
  }

  return (
    <div className="card">
      <div
        className="portfolio-image"
        style={{ backgroundImage: `url('${projectData.image}')` }}
      ></div>
      <div className="content">
        <p className="title">{projectData.name}</p>
        <h4 className="description">
          {projectData.description
            .split(' ')
            .map((s) => '#' + s)
            .join(' ')}
        </h4>
        <button
          className="btn"
          onClick={() => {
            modalDataHandler(projectData)
            setIsHidden(false)
          }}
        >
          Expand
        </button>
      </div>
      <div>
        {!isHidden ? (
          <Modal
            key={modalData.url}
            modalData={modalData}
            setModalData={setModalData}
            isHidden={isHidden}
            setIsHidden={setIsHidden}
          />
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default Card
