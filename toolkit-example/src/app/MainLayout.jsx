"use client"
import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store/store'
import Header from './common/Header'

export default function MainLayout({children}) {
  return (
    <div>
      <Provider store={store}>
             <Header/>
             {children}
      </Provider>
    </div>
  )
}
