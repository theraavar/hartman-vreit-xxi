import styles from './Main.module.css'

const Main = ({ children }: { children: React.ReactNode }) => {
    return (
        <main>
            {children}
        </main>
    )
}
export default Main