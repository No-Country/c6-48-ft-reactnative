import React, { useState } from 'react'
import { RefreshControl, ScrollView } from 'react-native'

export const PullToRefresh = ({ children, onRefresh }) => {
    const [refreshing, setRefreshing] = useState(false);

    return (
        <ScrollView
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={ ()=> onRefresh(setRefreshing)}
                />
            }
        >
            {children}
        </ScrollView>
    )
}
