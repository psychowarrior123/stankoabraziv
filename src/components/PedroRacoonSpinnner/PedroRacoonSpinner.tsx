import { FC, useRef } from 'react'
import spinner from './assets/pedro-racoon.gif'
import sound from './assets/pedro-racoon.mp3'

export const PedroRacoonSpinner: FC<{ size?: number; withSound?: boolean }> = ({ size = 32, withSound }) => {
  const audioRef = useRef<HTMLAudioElement>(null)

  return (
    <>
      <img
        style={{ width: size, height: size }}
        {...(withSound && {
          onClick: () => {
            audioRef.current?.play()
          }
        })}
        src={spinner}
        alt="RacoonSpinner"
      />
      {withSound && <audio autoPlay ref={audioRef} src={sound}></audio>}
    </>
  )
}
