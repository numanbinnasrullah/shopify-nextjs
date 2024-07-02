import {HomePageAssets} from '../../../assets/homepageAssets'

const HeroBanner = () => {
    return (
        <div class="block w-full">
            <div class="block w-full">
                <div class="block w-full">
                    <img src={HomePageAssets.heroBanner} class="block w-full" width="auto" height="auto" alt="Hero Image" />
                </div>
            </div>
        </div>
    )
}

export default HeroBanner