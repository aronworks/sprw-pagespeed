// import '../styles/globals.css'

function Faq({ question, answer }) {
    return (

        <details className="group question border border-grey-lighter border-b-0 last:border-b first:rounded-tl first:rounded-tr last:rounded-bl last:rounded-br">
            <summary className="flex items-center font-bold text-xl py-3 px-5 group-open:border-b">
                {question}
                <button className="ml-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" className="group-open:hidden">
                        <path d="M24 10H14V0h-4v10H0v4h10v10h4V14h10z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" className="hidden group-open:block">
                        <path d="M0 10h24v4h-24z" />
                    </svg>
                </button>
            </summary>
            <div className="font-light text-lg pb-3 pt-2 px-5">
                {answer}
            </div>
        </details>
    )
}
export default Faq;