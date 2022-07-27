import './Main.css'
import EmailToolbar from './email-toolbar';
import EmailContent from './email-content';

function Main() {
    return(
    <main className="email-view">
        <EmailToolbar />
        <EmailContent />
      </main>
    )
}

export default Main