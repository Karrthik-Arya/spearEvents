import { Box, Pressable } from 'native-base'
import React from 'react'
import { type ComponentProps, type FC } from 'react'

const PressableShrink: FC<ComponentProps<typeof Pressable>> = ({ children, disabled, ...props }) => {
  return <Pressable {...props} disabled={disabled} opacity={disabled ? 0.5 : 1} >
        {({ isPressed }) => {
          return (
                <Box style={{
                  transform: [{ scale: isPressed ? 0.95 : 1 }]
                }}>
                    {children}
                </Box>
          )
        }}
    </Pressable>
}

export default PressableShrink
