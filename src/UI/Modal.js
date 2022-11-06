import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './modal.scss'

const Modal = ({ modalData, isHidden, setIsHidden, setModalData }) => {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }
  console.log(modalData)
  return (
    <>
      <div
        className={`overlay ${isHidden ? 'hidden' : ''}`}
        onClick={() => {
          setIsHidden(true)
          setModalData({})
        }}
      ></div>

      <div className={`modal ${isHidden ? 'hidden' : ''}`}>
        <FontAwesomeIcon
          onClick={() => {
            setIsHidden(true)
            setModalData({})
          }}
          icon={faClose}
          size="3x"
          className="btn--close-modal"
        />

        <div className="modal-box">
          <div
            className="modal-image"
            style={{ backgroundImage: `url('${modalData.image}')` }}
          ></div>
          {/* <div className="modal-content">
            <p className="modal-title">{portfolio.name}</p>
            <h4 className="modal-description">{portfolio.description}</h4>
          </div> */}
        </div>

        <div className="cta-box">
          <a
            className="btn--visit flat"
            onClick={() => openInNewTab(modalData.url)}
            href={'#'}
          >
            Go live
          </a>
          <a
            className="btn--visit"
            onClick={() => openInNewTab(modalData.github)}
            href={'#'}
          >
            Github Code
          </a>
        </div>
      </div>
    </>
  )
}

export default Modal
