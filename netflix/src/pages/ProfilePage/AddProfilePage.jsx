
import React, { useRef, useState } from 'react'
import { ErrorText, Heading, PrefferedRectangleButton, RectangleButton, SmallText } from '../../components/globals'
import { useSelector } from 'react-redux'
import useFirestoreDB from '../../hooks/useFirestoreDB';
import { validateName } from '../../utils/validation';
import UserProfileImage from '../../components/UserProfileImage';
import { Theme } from '../../styles/theme';
import ProfileEntryInput from '../../components/AddProfilePageComponents/ProfileEntryInput';
import AddNameContianer from '../../components/AddProfilePageComponents/AddNameContainer';
import { useLanguage } from '../../context/LanguageContext';

const AddProfilePage = ({ setShowAddProfile }) => {
    const { languageData } = useLanguage();
    const users = useSelector(store => store.user.users);
    const [errorText, setErrorText] = useState('');
    const [loading, setLoading] = useState(false);
    const { addProfile } = useFirestoreDB();
    const userNameref = useRef();

    const addUserProfileName = () => {
        const name = userNameref.current.value
        setLoading(true);
        if (validateName(name)) {
            try {
                addProfile(name)
            } catch (e) {
                setErrorText(e)
                setLoading(false);
            }

        } else {
            setErrorText(!languageData ? '' : languageData?.invalidName);
            setLoading(false);
        }
    }

    return <div className='flex flex-col justify-start items-start gap-4'>
        <Heading>{!languageData ? '' : languageData?.addProfile}</Heading>
        <SmallText
            $color={Theme.text.BGBlack.Grey}>
            {!languageData ? '' : languageData?.addProfileDesc}</SmallText>
        <AddNameContianer className='flex items-center gap-5'>
            <UserProfileImage
                alt="Add users"
                className=' rounded-[4px] max-h-[180px] max-w-[180px] min-h-[80px] min-w-[80px] w-[8vw] h-[8vw]'
                index={users ? users.length : 0} />
            <ProfileEntryInput
                onChange={(e) => {
                    e.preventDefault();
                    setErrorText('');
                }}
                ref={userNameref} />
            <ErrorText>{errorText}</ErrorText>
        </AddNameContianer>
        <div className='flex gap-5'>
            <PrefferedRectangleButton $loading={loading} onClick={(e) => {
                e.preventDefault();
                addUserProfileName();
            }}>{loading ? "" : !languageData ? '' : languageData?.continue}</PrefferedRectangleButton>
            <RectangleButton
                onClick={() =>
                    setShowAddProfile(prev => !prev)}>
                {!languageData ? '' : languageData?.cancel}
            </RectangleButton>
        </div>
    </div>
}

export default AddProfilePage;