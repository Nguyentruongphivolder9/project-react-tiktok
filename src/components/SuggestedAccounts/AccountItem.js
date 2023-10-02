import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import style from './SuggestedAccounts.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview';
import { render } from '@testing-library/react';

const cx = classNames.bind(style);

function AccountItem() {

    const renderReview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    }

    return (
        <div>
            <Tippy
                interactive
                delay={[800, 0]}
                offset={[-20, 0]}
                placement="bottom"
                render={renderReview}
            >
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://p77-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/7cf46fdfdfde593d1b3a92c73eb06ab9.jpeg?x-expires=1696395600&x-signature=5zOKspi6vvlSld%2BpbIZFZ98uVA4%3D"
                        alt=""
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>NguyenTruongPhi</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>Phi001</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {

}

export default AccountItem;