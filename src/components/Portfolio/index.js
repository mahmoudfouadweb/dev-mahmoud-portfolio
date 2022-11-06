import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import { getDocs, collection } from 'firebase/firestore/lite'
import { db } from '../../firebase'

import Card from '../../UI/Card'
import Loader from 'react-loaders'
import './index.scss'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [portfolio, setPortfolio] = useState([])

  // prettier-ignore
  const filter = ['All','HTML','CSS','SASS','javaScript','React','Material UI','Bootstrap','Tailwind',]

  useEffect(() => {
    let isMounted = true
    const timer = setTimeout(() => {
      if (isMounted) setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      isMounted = false
      clearTimeout(timer)
    }
  })

  useEffect(() => {
    getPortfolio()
  }, [])

  const getPortfolio = async () => {
    const querySnapshot = await getDocs(collection(db, 'portfolio'))
    setPortfolio(querySnapshot.docs.map((doc) => doc.data()))
  }

  const renderPortfolio = (portfolio) => {
    return (
      <div className="images-container">
        {portfolio.map((port, idx) => {
          const projectData = { ...port, id: idx }
          return (
            <Card
              projectData={projectData}
              key={projectData.id}
              id={projectData.id}
            />
          )
        })}
      </div>
    )
  }

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'Portfolio'.split('')}
            idx={15}
          />
        </h1>
        <section>
          {/* <div>{filter.map((element) => element)}</div> */}
          <div>{renderPortfolio(portfolio)}</div>
        </section>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Portfolio
