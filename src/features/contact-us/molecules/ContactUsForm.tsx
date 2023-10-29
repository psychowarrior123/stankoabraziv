import
  {
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormHelperText,
    Paper,
    PaperProps,
    Stack,
    TextField,
    Typography
  } from '@mui/material'
import { FC } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useLocation } from 'react-router'
import InputMask from 'react-text-mask'

const errors = {
  required: 'Это поле обязательно',
  incorrectNumber: 'Введите корректный номер телефона',
  incorrectEmail: 'Введите корректный e-mail',
  min: '',
  max: '',
  maxLength: '',
  minLength: ''
}

const phoneRegexp = /^([+]?[0-9\s-()]{3,25})*$/i
const emailRegexp = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+)/

export const ContactUsForm: FC<PaperProps> = ({ sx, ...props }) => {
  const location = useLocation()
  const form = useForm({
    defaultValues: {
      name: '',
      surname: '',
      phone: '',
      email: '',
      comment: '',
      product: location.state?.item ?? '',
      address: '',
      agreement: false
    }
  })

  return (
    <Paper elevation={24} sx={{ p: 8, maxWidth: 540, ...sx }} {...props}>
      <Stack spacing={4}>
        <Stack spacing={2} alignItems="center" justifyContent="center">
          <Typography variant="H4">Узнать стоимость или заказать</Typography>
          <Typography variant="H6" textAlign="center">
            Для уточнения стоимости напишите Ваши имя, телефон, почту и интересующий Вас товар
          </Typography>
        </Stack>
        <Stack spacing={2}>
          <Controller
            name="name"
            control={form.control}
            rules={{ required: true }}
            render={({ field, fieldState }) => (
              <TextField
                label="Имя"
                error={!!fieldState.error}
                helperText={
                  !!fieldState.error &&
                  errors[fieldState.error.type as 'required' | 'min' | 'max' | 'minLength' | 'maxLength']
                }
                {...field}
              />
            )}
          />
          <Controller
            name="surname"
            control={form.control}
            rules={{ required: true }}
            render={({ field, fieldState }) => (
              <TextField
                label="Фамилия"
                error={!!fieldState.error}
                helperText={
                  !!fieldState.error &&
                  errors[fieldState.error.type as 'required' | 'min' | 'max' | 'minLength' | 'maxLength']
                }
                {...field}
              />
            )}
          />
          <Controller
            name="phone"
            control={form.control}
            rules={{
              required: true,
              validate: {
                incorrectNumber: (value) => phoneRegexp.test(value)
              }
            }}
            render={({ field, fieldState }) => (
              <InputMask
                mask={[
                  '+',
                  '7',
                  ' ',
                  '(',
                  /[1-9]/,
                  /\d/,
                  /\d/,
                  ')',
                  ' ',
                  /\d/,
                  /\d/,
                  /\d/,
                  '-',
                  /\d/,
                  /\d/,
                  '-',
                  /\d/,
                  /\d/
                ]}
                render={(ref, props) => {
                  return (
                    <TextField
                      inputRef={ref}
                      error={!!fieldState.error}
                      helperText={
                        !!fieldState.error &&
                        errors[
                          fieldState.error.type as 'required' | 'min' | 'max' | 'minLength' | 'maxLength'
                        ]
                      }
                      label="Телефон"
                      {...props}
                    />
                  )
                }}
                {...field}
              />
            )}
          />
          <Controller
            name="email"
            control={form.control}
            rules={{
              required: true,
              validate: {
                incorrectEmail: (value) => {
                  return emailRegexp.test(value)
                }
              }
            }}
            render={({ field, fieldState }) => (
              <TextField
                label="E-mail"
                error={!!fieldState.error}
                helperText={
                  !!fieldState.error &&
                  errors[fieldState.error.type as 'required' | 'min' | 'max' | 'minLength' | 'maxLength']
                }
                {...field}
              />
            )}
          />
          <Controller
            name="comment"
            control={form.control}
            rules={{ required: true }}
            render={({ field, fieldState }) => (
              <TextField
                label="Информация по заказу"
                multiline
                minRows={5}
                error={!!fieldState.error}
                helperText={
                  !!fieldState.error &&
                  errors[fieldState.error.type as 'required' | 'min' | 'max' | 'minLength' | 'maxLength']
                }
                {...field}
              />
            )}
          />
          <Controller
            name="product"
            control={form.control}
            rules={{ required: true }}
            render={({ field, fieldState }) => (
              <TextField
                label="Выбранный товар"
                error={!!fieldState.error}
                helperText={
                  !!fieldState.error &&
                  errors[fieldState.error.type as 'required' | 'min' | 'max' | 'minLength' | 'maxLength']
                }
                {...field}
              />
            )}
          />
          <Controller
            name="address"
            control={form.control}
            rules={{ required: true }}
            render={({ field, fieldState }) => (
              <TextField
                label="Адрес"
                error={!!fieldState.error}
                helperText={
                  !!fieldState.error &&
                  errors[fieldState.error.type as 'required' | 'min' | 'max' | 'minLength' | 'maxLength']
                }
                {...field}
              />
            )}
          />
          <Controller
            name="agreement"
            control={form.control}
            rules={{ required: true }}
            render={({ field, fieldState }) => (
              <FormControl required>
                <FormControlLabel
                  required
                  control={<Checkbox checked={field.value} {...field} />}
                  label={
                    <Typography variant="caption">
                      Нажимая кнопку «отправить», я даю свое согласие на обработку моих персональных данных, в
                      соответствии с Федеральным законом от 27.07.2006 года №152-ФЗ «О персональных данных»,
                      на условиях и для целей, определенных в Согласии на обработку персональных данных
                    </Typography>
                  }
                />
                {!!fieldState.error && (
                  <FormHelperText sx={{ color: (theme) => theme.palette.error.main }}>
                    {errors[fieldState.error.type as 'required' | 'min' | 'max' | 'minLength' | 'maxLength']}
                  </FormHelperText>
                )}
              </FormControl>
            )}
          />
          <Button
            onClick={() => {
              form.handleSubmit((values) => {
                const enter = encodeURI('\n')
                window.open(
                  `mailto:stankoabraziv@list.ru?subject=Узнать размеры&body=
Имя: ${values.name}${enter}
Фамилия: ${values.surname}${enter}
Телефон:${values.phone}${enter}
E-mail: ${values.email}${enter}
Информация по заказу: ${values.comment}${enter}
Выбранный товар: ${values.product}${enter}
Адрес: ${values.address}${enter}`
                )
              })()
            }}
            variant="contained"
          >
            Отправить
          </Button>
        </Stack>
      </Stack>
    </Paper>
  )
}
