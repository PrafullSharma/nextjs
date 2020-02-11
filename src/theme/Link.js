/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import {useRouter} from 'next/router'
import NextLink from 'next/link'
import MuiLink from '@material-ui/core/Link'

type LinkFlowType = {
  activeClassName?: string,
  as?: string | Object,
  className?: string,
  href?: string | Object,
  innerRef?: Function | Object,
  naked?: boolean,
  onClick?: Function,
  prefetch?: boolean,
};

type NextComposedFlowType = {
  as?: string | Object,
  href?: string | Object,
  prefetch?: boolean,
};

const NextComposed = React.forwardRef(function NextComposed(props: NextComposedFlowType, ref) {
  const {as, href, prefetch, ...other} = props

  return (
    <NextLink href={href} prefetch={prefetch} as={as}>
      <a ref={ref} {...other} />
    </NextLink>
  )
})

// A styled version of the Next.js Link component:
function Link(props: LinkFlowType) {
  const {
    href,
    activeClassName = 'active',
    className: classNameProps,
    innerRef,
    naked,
    ...other
  } = props

  const router = useRouter()
  const pathname = typeof href === 'string' ? href : href.pathname
  const className = clsx(classNameProps, {
    [activeClassName]: router.pathname === pathname && activeClassName
  })

  if (naked) {
    return <NextComposed className={className} ref={innerRef} href={href} {...other} />
  }

  return (
    <MuiLink component={NextComposed} className={className} ref={innerRef} href={href} {...other} />
  )
}

export default React.forwardRef((props, ref) => <Link {...props} innerRef={ref}/>)
