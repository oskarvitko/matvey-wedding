export const initForm = () => {
    const form = document.getElementById('confirm-form') as HTMLFormElement
    if (form) {
        const button = form.querySelector('button')
        if (button) {
            form.addEventListener('submit', (e) => {
                e.preventDefault()
                const formData = new FormData(form)

                const data = {
                    name: formData.get('name'),
                    surname: formData.get('surname'),
                    willBe: formData.get('willBe') === '1' ? true : false,
                    comment: formData.get('comment'),
                }

                button.textContent = 'Отправка...'
                form.setAttribute('inert', '')
                fetch(`${config.api}/form.php`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                })
                    .then((response) => {
                        if (response.status === 200) {
                            form.reset()
                            showText('Ваш ответ отправлен!')
                        }
                    })
                    .finally(() => {
                        button.textContent = 'Отправить'
                        form.removeAttribute('inert')
                    })
            })
        }
    }

    document.addEventListener('click', (e) => {
        const btn = e.target
        if (btn instanceof HTMLButtonElement) {
            if (btn.hasAttribute('data-close-alert')) {
                document.body.removeChild(btn.parentElement!)
            }
        }
    })
}

const showText = (message: string) => {
    const node = document.createElement('div')
    node.classList.add('alert')

    const closeBtn = document.createElement('button')
    closeBtn.setAttribute('data-close-alert', '')
    closeBtn.textContent = '×'
    node.append(closeBtn)

    const span = document.createElement('span')
    span.textContent = message

    node.append(span)

    document.body.append(node)
}
