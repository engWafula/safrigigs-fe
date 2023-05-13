import "@styles/globals.css";
import Nav from "@components/Nav";
import  Provider from "@components/Provider";
export const metadata = {
  title: "Promptive",
  description: "Prompt engineering",
};

 
export default function RootLayout({ children }) {
  console.log(process.env.MONGODB_URI,process.env.NEXTAUTH_URL)
 return (
  <html lang='en'>
  <body>
    <Provider>
      <div className='main'>
        <div className='gradient' />
      </div>

      <main className='app'>
        <Nav />
        {children}
      </main>
      </Provider>
  </body>
</html>
  )
}
