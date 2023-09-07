import { Fragment, useContext, useEffect, useRef, useState } from "react"
import { useRouter } from "next/router"
import { E, getAllLocalStorageItems, getRefValue, getRefValues, isTrue, preventDefault, refs, uploadFiles, useEventLoop } from "/utils/state"
import { EventLoopContext, StateContext } from "/utils/context.js"
import "focus-visible/dist/focus-visible"
import { Box, Button, Center, Container, Divider, Flex, Heading, Image, Link, Menu, MenuButton, MenuItem, MenuList, SimpleGrid, Text, useColorMode } from "@chakra-ui/react"
import NextLink from "next/link"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import NextHead from "next/head"


export default function Component() {
  const my_state = useContext(StateContext)
  const router = useRouter()
  const { colorMode, toggleColorMode } = useColorMode()
  const focusRef = useRef();
  
  // Main event loop.
  const [Event, notConnected] = useContext(EventLoopContext)

  // Set focus to the specified element.
  useEffect(() => {
    if (focusRef.current) {
      focusRef.current.focus();
    }
  })

  // Route after the initial page hydration.
  useEffect(() => {
    const change_complete = () => Event([E('my_state.hydrate', {})])
    router.events.on('routeChangeComplete', change_complete)
    return () => {
      router.events.off('routeChangeComplete', change_complete)
    }
  }, [router])


  return (
  <Fragment><Fragment>
  <Container sx={{"padding": "0px"}}>
  <Flex sx={{"justifyContent": "space-between"}}>
  <Box>
  <Link as={NextLink} href={`/`} sx={{"background-color": "your_color_here"}}>
  <Image src={`/naruto_py.png`} sx={{"width": "50px"}}/>
</Link>
</Box>
  <Center>
  <Menu>
  <MenuButton>
  {`MENU`}
</MenuButton>
  <MenuList>
  <MenuItem>
  <Link as={NextLink} href={`/aboutpage`}>
  {`About`}
</Link>
</MenuItem>
  <MenuItem sx={{"href": "/"}}>
  {`Index`}
</MenuItem>
</MenuList>
</Menu>
</Center>
  <Button onClick={toggleColorMode} sx={{"float": "right"}}>
  <Fragment>
  {isTrue((colorMode === "light")) ? (
  <Fragment>
  <SunIcon/>
</Fragment>
) : (
  <Fragment>
  <MoonIcon/>
</Fragment>
)}
</Fragment>
</Button>
</Flex>
  <Divider/>
  <SimpleGrid columns={[1, 2]}>
  <Center>
  <Box>
  <Heading size={`xl`}>
  {`I'm Andrei`}
</Heading>
  <Heading size={`sm`}>
  {`Testing reflex`}
</Heading>
  <Button onClick={_e => Event([E("my_state.get_quote", {})], _e)} sx={{"marginTop": "2rem"}}>
  {`Clik me`}
</Button>
  <Box>
  <Text as={`b`}>
  {my_state.quote}
</Text>
  <Text>
  {my_state.author}
</Text>
</Box>
</Box>
</Center>
  <Center>
  <Image src={`/naruto_py.png`}/>
</Center>
</SimpleGrid>
</Container>
  <NextHead>
  <title>
  {`Reflex App`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
    </Fragment>
  )
}
