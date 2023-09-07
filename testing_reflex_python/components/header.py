import reflex as rx
import requests
import random


class MyState(rx.State):
    quote: str = ''
    author: str = ''

    def get_quote(self):
        url = 'https://type.fit/api/quotes'
        r = requests.get(url)
        data = r.json()
        rand_num = random.randrange(0, len(data))
        self.quote = data[rand_num]['text']
        self.author = data[rand_num]['author']


def header():
    return rx.responsive_grid(
        rx.center(
            rx.box(
                rx.heading("I'm Andrei", size='xl'),
                rx.heading("Testing reflex", size='sm'),
                rx.button('Clik me', margin_top='2rem',
                          on_click=MyState.get_quote),
                quote()
            )
        ),
        rx.center(
            rx.image(
                src='/naruto_py.png'
            )
        ),
        columns=[1,2]
    )


def quote():
    return rx.box(
        rx.text(MyState.quote, as_='b'),
        rx.text(MyState.author),
    )
