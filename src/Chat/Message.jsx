import React from 'react';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';

export default function Message({ message }) {
  return (
    <Paper style={{ display: 'flex', marginBottom: '14px' }}>
      <CardMedia
        image={
          message.sender && message.sender.profileUrl
        }
        style={{ width: 50, height: 50, marginTop: 25 }}
      />
      <div style={{
        display: 'flex',
        flexDirection: 'column',
      }}>
        <CardContent style={{ flex: '1 0 auto', minWidth: 180, textAlign: 'left' }}>
          <Typography variant="body1" noWrap style={{ width: 360 }}>
            {
              // Render your message according to message types
              message.messageType === 'file'
                ? (
                  <Link target="_blank" rel="noreferrer" variant="body2" href={message.url}>
                    {message.name}
                  </Link>
                )
                : `${message.message}`
            }
          </Typography>
          <Typography variant="caption" color="textSecondary">
            { new Date(message.createdAt).toDateString() }
              {` by
                ${message.sender && message.sender.nickname}
              `}
          </Typography>
        </CardContent>
      </div>
    </Paper>
  )
}
