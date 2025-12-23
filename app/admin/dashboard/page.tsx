import { cookies } from 'next/headers';
import LoginForm from './loginForm';
import { logout } from './login';
import { createClient } from '@vercel/edge-config';
import { updateDatabase } from './actions';
import Link from 'next/link';

export default async function Admin() {
    const cookieStore = await cookies();
    const auth_token = cookieStore.get('auth_token')
    const config = createClient(process.env.EDGE_CONFIG);

    const isAuthenticated = !!auth_token?.value && auth_token?.value === process.env.AUTH_TOKEN
    if (!isAuthenticated) {
        return <LoginForm/>
    }

    return (
    <div className='admin-page'>
        <p>Welcome to the admin menu!</p>
        <button onClick={logout} className='admin-button'>Logout</button>
        <Link href='/' className='admin-button'>Return home</Link>
        {/* Header Video Playback ID */}
        <form action={updateDatabase} className='update-form'>
            <label>header-video-playback-id</label>
            <input name="key" type="hidden" value={'header-video-playback-id'}/>
            <input 
                name="value" 
                type="text" 
                defaultValue={await config.get("header-video-playback-id") || ''}
                className='admin-input'
            />
            <button type="submit" className='admin-button'>
                Update
            </button>
        </form>

        {/* merch-image-url */}
        <form action={updateDatabase} className='update-form'>
            <label>merch-image-url</label>
            <input name="key" type="hidden" value={'merch-image-url'}/>
            <input 
                name="value" 
                type="text" 
                defaultValue={await config.get("merch-image-url") || ''}
                className='admin-input'
            />
            <button type="submit" className='admin-button'>
                Update
            </button>
        </form>

        {/* merch-payment-url */}
        <form action={updateDatabase} className='update-form'>
            <label>merch-payment-url</label>
            <input name="key" type="hidden" value={'merch-payment-url'}/>
            <input 
                name="value" 
                type="text" 
                defaultValue={await config.get("merch-payment-url") || ''}
                className='admin-input'
            />
            <button type="submit" className='admin-button'>
                Update
            </button>
        </form>

        {/* merch-price */}
        <form action={updateDatabase} className='update-form'>
            <label>merch-price</label>
            <input name="key" type="hidden" value={'merch-price'}/>
            <input 
                name="value" 
                type="text" 
                defaultValue={await config.get("merch-price") || ''}
                className='admin-input'
            />
            <button type="submit" className='admin-button'>
                Update
            </button>
        </form>

        {/* merch-title */}
        <form action={updateDatabase} className='update-form'>
            <label>merch-title</label>
            <input name="key" type="hidden" value={'merch-title'}/>
            <input 
                name="value" 
                type="text" 
                defaultValue={await config.get("merch-title") || ''}
                className='admin-input'
            />
            <button type="submit" className='admin-button'>
                Update
            </button>
        </form>

        {/* bio-title */}
        <form action={updateDatabase} className='update-form'>
            <label>bio-title</label>
            <input name="key" type="hidden" value={'bio-title'}/>
            <input 
                name="value" 
                type="text" 
                defaultValue={await config.get("bio-title") || ''}
                className='admin-input'
            />
            <button type="submit" className='admin-button'>
                Update
            </button>
        </form>

        {/* bio-description */}
        <form action={updateDatabase} className='update-form'>
            <label>bio-description</label>
            <input name="key" type="hidden" value={'bio-description'}/>
            <input 
                name="value" 
                type="text" 
                defaultValue={await config.get("bio-description") || ''}
                className='admin-input'
            />
            <button type="submit" className='admin-button'>
                Update
            </button>
        </form>

        {/* socials-header */}
        <form action={updateDatabase} className='update-form'>
            <label>socials-header</label>
            <input name="key" type="hidden" value={'socials-header'}/>
            <input 
                name="value" 
                type="text" 
                defaultValue={await config.get("socials-header") || ''}
                className='admin-input'
            />
            <button type="submit" className='admin-button'>
                Update
            </button>
        </form>

        {/* instagram-url */}
        <form action={updateDatabase} className='update-form'>
            <label>instagram-url</label>
            <input name="key" type="hidden" value={'instagram-url'}/>
            <input 
                name="value" 
                type="text" 
                defaultValue={await config.get("instagram-url") || ''}
                className='admin-input'
            />
            <button type="submit" className='admin-button'>
                Update
            </button>
        </form>

        {/* applemusic-url */}
        <form action={updateDatabase} className='update-form'>
            <label>applemusic-url</label>
            <input name="key" type="hidden" value={'applemusic-url'}/>
            <input 
                name="value" 
                type="text" 
                defaultValue={await config.get("applemusic-url") || ''}
                className='admin-input'
            />
            <button type="submit" className='admin-button'>
                Update
            </button>
        </form>

        {/* spotify-url */}
        <form action={updateDatabase} className='update-form'>
            <label>spotify-url</label>
            <input name="key" type="hidden" value={'spotify-url'}/>
            <input 
                name="value" 
                type="text" 
                defaultValue={await config.get("spotify-url") || ''}
                className='admin-input'
            />
            <button type="submit" className='admin-button'>
                Update
            </button>
        </form>

        <form action={updateDatabase} className='update-form'>
            <label>soundcloud-url</label>
            <input name="key" type="hidden" value={'soundcloud-url'}/>
            <input 
                name="value" 
                type="text" 
                defaultValue={await config.get("soundcloud-url") || ''}
                className='admin-input'
            />
            <button type="submit" className='admin-button'>
                Update
            </button>
        </form>

        <form action={updateDatabase} className='update-form'>
            <label>bio-carousel-count</label>
            <input name="key" type="hidden" value={'bio-carousel-count'}/>
            <input 
                name="value" 
                type="text" 
                defaultValue={await config.get("bio-carousel-count") || ''}
                className='admin-input'
            />
            <button type="submit" className='admin-button'>
                Update
            </button>
        </form>
    </div>
    );
}
