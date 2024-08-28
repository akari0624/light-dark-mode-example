'use client'

export function ThemeSwitch() {
  
  return (
    <div className="flex justify-center align-middle gap-x-8">
      <button
        type="button"
        onClick={() => {
          document.documentElement.setAttribute('data-theme', 'dark')
          console.log('switch to dark')
        }}
      >
        dark
      </button>
      <button
        type="button"
        onClick={() => {
          document.documentElement.setAttribute('data-theme', 'light')
          console.log('switch to light')
        }}
      >
        light
      </button>
    </div>
  )
}
