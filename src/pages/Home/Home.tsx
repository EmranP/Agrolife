import { AssistantModal } from '../../features/assistant/ui/AssistantModal'
import { Achievement } from './components/achievements/Achievement'
import { SectionAuth } from './components/auth/SectionAuth'
import { CategoriesLayout } from './components/Categories/CategoriesLayout'
import { ContactUS } from './components/contact/ContactUS'
import { Footer } from './components/footer/Footer'
import { Header } from './components/header/HeaderHome'
import { IdealFramer } from './components/ideal/IdealFramer'
// import { Service } from './components/service/Service'

const Home = () => {
	return (
		<>
			<Header />
			<SectionAuth />
			<Achievement />
			<IdealFramer />
			<CategoriesLayout />
			{/* <Service /> */}
			<ContactUS />
			<Footer />
			<AssistantModal />
		</>
	)
}

export default Home
