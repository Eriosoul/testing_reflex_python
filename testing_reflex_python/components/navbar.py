import reflex as rx


def navbar():
    return rx.flex(
        rx.box(
            rx.link(
                rx.image(src='/naruto_py.png', width='50px'),
                href='/',
                style = {"background-color": "your_color_here"}
            )
        ),
        rx.center(
            rx.menu(
                rx.menu_button('MENU'),
                rx.menu_list(
                    rx.menu_item(
                        rx.link('About',
                                href='/aboutpage')
                    ),
                    rx.menu_item('Index',
                                 href='/')
                )
            )
        ),
        rx.color_mode_button(rx.color_mode_icon(), float="right"),
        justify_content = 'space-between'
    )