import classNames from "classnames/bind";
import style from './Sidebar.module.scss'
import Menu, { MenuItem } from "./Menu";
import config from "~/config";
import { HomeIcon, UserGroupIcon, LiveIcon } from "~/components/Icons";
import SuggestedAccounts from "~/components/SuggestedAccounts";

const cx = classNames.bind(style);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />}></MenuItem>
                <MenuItem title="Following" to={config.routes.following} icon={<UserGroupIcon />}></MenuItem>
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />}></MenuItem>
            </Menu>

            <SuggestedAccounts label="Suggested accounts" />
            <SuggestedAccounts label="Following accounts" />
        </aside>
    );
}

export default Sidebar;