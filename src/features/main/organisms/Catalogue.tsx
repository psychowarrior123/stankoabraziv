import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Link,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material'
import { FC } from 'react'

export const Catalogue: FC = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.between('xs', 'sm'))
  return (
    <Paper elevation={24} sx={{ p: 8, ...(!matches && { width: 350 }) }}>
      <Stack spacing={4}>
        <Typography variant="H4">Каталог</Typography>
        <Stack>
          <Accordion>
            <AccordionSummary>
              <Typography variant="H6">Абразивный инструмент</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Stack spacing={1}>
                <Link href="/abraziv/zatochnie-krygi-Grand">Шлифовальные круги Grand</Link>
                <Link href="/abraziv/zatochnie_krygi-carborundum-electrite">
                  Заточные круги CARBORUNDUM ELECTRITE
                </Link>
                <Link href="/abraziv/zatochnie_krygi-TYROLIT">Шлифовальные круги Tyrolit</Link>
                <Link href="/abraziv/otreznie-krygi">Круги отрезные</Link>
                <Link href="/abraziv/krygi-benzopili">Заточные круги для цепей бензопил</Link>
                <Typography variant="body" whiteSpace="pre-wrap" style={{ marginTop: 20 }}>
                  Абразивный инструмент выпускается в виде шлифовальных кругов, брусков, лент Абразивный
                  инструмент — это инструмент, обладающий высокой твердостью, и используемый для обработки
                  поверхности различных материалов. Абразивные инструменты используются в процессах
                  шлифования, полирования, хонингования, суперфиниширования, разрезания материалов и широко
                  применяются в заготовительном производстве и окончательной обработке различных металлических
                  и неметаллических материалов. На сегодняшний день качественный абразивный инструмент находит
                  свое применение во многих областях промышленности. В зависимости от вида используемого
                  шлифовального материала различают алмазные, эльбовые, электрокорундовые, карбидкремневые и
                  другие абразивные инструменты.
                </Typography>
              </Stack>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary>
              <Typography variant="H6">Алмазный инструмент</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Stack spacing={1}>
                <Link href="/diamond/straight">Круги прямого профиля</Link>
                <Link href="/diamond/disc">Круги тарельчатые</Link>
                <Link href="/diamond/cup">Круги чашечные</Link>
                <Link href="/diamond/cbn">Круги эльборовые</Link>
                <Typography variant="body" whiteSpace="pre-wrap" style={{ marginTop: 20 }}>
                  Алмазный инструмент — расходный инструмент, используемый для обработки (резания, сверления,
                  шлифования, полировки) бетона, камня и других неметаллических строительных материалов, где
                  рабочими элементами являются алмазные зёрна, закреплённые на корпусе инструмента с помощью
                  связующего состава (металлического, пластикового или др.).
                </Typography>
              </Stack>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary>
              <Typography variant="H6">Пилы</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body">я в ахуе</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary>
              <Typography variant="H6">Полотно</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body" whiteSpace="pre-wrap">
                — Скажите, а это ваш "Ягуар" стоит около выхода?{'\n'}— Да.{'\n'}— Я допью?
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary>
              <Typography variant="H6">Станки</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body" whiteSpace="pre-wrap">
                Волк поймал колобка, крутит его в лапах, вертит:{'\n'}— Куда тебя ебать??? Куда тебя ебать???
                {'\n'}— Не надо меня ебать!{'\n'}— ОТКУДА ТЫ ЭТО СКАЗАЛ??!! ОТКУДА ТЫ ЭТО СКАЗАЛ???!!
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary>
              <Typography variant="H6">Для заточки коньков</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body" whiteSpace="pre-wrap">
                - Сынок, ты уже взрослый, тебе пора задуматься о карьере.{'\n'}- О каком карьере?
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary>
              <Typography variant="H6">Комплексное обслуживание</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body" whiteSpace="pre-wrap">
                Толстой ебёт Горькогоо:{'\n'}— Кто ж тебя назвал горьким, сладенький ты мой?
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Stack>
      </Stack>
    </Paper>
  )
}
